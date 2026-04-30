// ==========================================
// RESULTS LOGIC
// ==========================================

let userAnswers = [];
let userEcon = 0;
let userLib = 0;
let selectedCandidateId = null;

const IDEOLOGY_PROFILES = [
  {
    condition: (e, l) => e <= -1.2 && l >= 0.5,
    badge: "IZQUIERDA",
    badgeClass: "izquierda",
    label: "Progresista Libertario",
    desc: "Defiendes un Estado activo en la economía y la redistribución de la riqueza, combinado con amplias libertades civiles e individuales. Priorizas la justicia social, los derechos humanos y la igualdad. Estás cerca de movimientos de izquierda moderna."
  },
  {
    condition: (e, l) => e <= -1.2 && l < 0.5,
    badge: "IZQUIERDA",
    badgeClass: "izquierda",
    label: "Socialista Colectivista",
    desc: "Apoyas un Estado fuerte que regule o controle sectores clave de la economía y garantice bienestar universal. Tu visión es colectiva y transformadora: la igualdad material y la soberanía nacional son prioridades centrales."
  },
  {
    condition: (e, l) => e >= 1.2 && l >= 0.5,
    badge: "DERECHA",
    badgeClass: "derecha",
    label: "Liberal Clásico",
    desc: "Crees en el libre mercado, la propiedad privada y las libertades individuales como pilares del progreso. Apoyas una economía desregulada con mínima intervención estatal, pero también defiendes libertades civiles y personales. Tu visión es la del liberalismo económico moderno."
  },
  {
    condition: (e, l) => e >= 1.2 && l < 0.5,
    badge: "DERECHA",
    badgeClass: "derecha",
    label: "Conservador Tradicional",
    desc: "Apoyas la economía de mercado, la seguridad con mano dura y los valores tradicionales. Para ti, el orden, la familia y la propiedad son fundamentos de la sociedad. Tienes afinidad con partidos de derecha que combinan libre empresa con autoridad."
  },
  {
    condition: (e, l) => Math.abs(e) < 1.2 && l >= 0.5,
    badge: "CENTRO",
    badgeClass: "centro",
    label: "Centrista Progresista",
    desc: "Tu posición equilibra la economía de mercado con regulaciones sociales y defiende activamente los derechos civiles. Eres pragmático: buscas soluciones basadas en evidencia más que en dogmas ideológicos, y apoyas la diversidad y los derechos individuales."
  },
  {
    condition: (e, l) => Math.abs(e) < 1.2 && l < 0.5,
    badge: "CENTRO",
    badgeClass: "centro",
    label: "Centrista Moderado",
    desc: "Tu visión es pragmática y moderada. Apoyas una economía mixta, instituciones fuertes y seguridad sin extremos. No te identificas con los polos ideológicos y prefieres soluciones concretas que funcionen para todos los colombianos."
  }
];

function getProfile(econAvg, libAvg) {
  return IDEOLOGY_PROFILES.find(p => p.condition(econAvg, libAvg)) || IDEOLOGY_PROFILES[4];
}

function initResults() {
  const raw = sessionStorage.getItem('quizAnswers');
  if (!raw) {
    // No answers found, redirect to quiz
    window.location.href = 'quiz.html';
    return;
  }
  
  userAnswers = JSON.parse(raw);
  
  // Calculate average scores
  userEcon = userAnswers.reduce((s, a) => s + (a.econScore || 0), 0) / userAnswers.length;
  userLib = userAnswers.reduce((s, a) => s + (a.libScore || 0), 0) / userAnswers.length;
  
  renderProfile();
  renderMap();
  renderScoreBars();
  renderCandidateDropdown();

  // Auto-seleccionar el mejor match para que el usuario vea su candidato top de inmediato
  const ranked = getRankedCandidates(userAnswers);
  if (ranked.length > 0) {
    selectCandidateById(ranked[0].candidate.id);
  }
}

function renderProfile() {
  const profile = getProfile(userEcon, userLib);
  
  const badge = document.getElementById('resultBadge');
  badge.textContent = profile.badge;
  badge.className = `result-badge ${profile.badgeClass}`;
  
  document.getElementById('resultLabel').textContent = profile.label;
  document.getElementById('resultDesc').textContent = profile.desc;
}

function renderMap() {
  const coords = scoreToMapCoords(userEcon, userLib);
  
  // Move user dot
  const userDot = document.getElementById('userDot');
  userDot.setAttribute('transform', `translate(${coords.x}, ${coords.y})`);
  
  // Add candidate dots
  const dotsGroup = document.getElementById('candidateDots');
  dotsGroup.innerHTML = '';
  
  CANDIDATES.forEach(c => {
    const pos = scoreToMapCoords(c.econScore, c.libScore);
    const color = c.ideology === 'izquierda' ? '#FF4D6D' : c.ideology === 'derecha' ? '#4A86FF' : '#5DFFA3';
    
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
    g.setAttribute('class', 'candidate-dot');
    g.style.cursor = 'pointer';
    g.onclick = () => selectCandidateById(c.id);
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('r', '6');
    circle.setAttribute('fill', color);
    circle.setAttribute('opacity', '0.75');
    circle.setAttribute('stroke', 'rgba(255,255,255,0.3)');
    circle.setAttribute('stroke-width', '1');
    
    // Abbreviated name label
    const nameParts = c.name.split(' ');
    const label = nameParts[0];
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('y', '-10');
    text.setAttribute('fill', 'rgba(255,255,255,0.6)');
    text.setAttribute('font-size', '7');
    text.setAttribute('font-family', 'IBM Plex Sans');
    text.setAttribute('text-anchor', 'middle');
    text.textContent = label;
    
    g.appendChild(circle);
    g.appendChild(text);
    dotsGroup.appendChild(g);
  });
}

function renderScoreBars() {
  const container = document.getElementById('scoreBars');
  container.innerHTML = '';
  
  // Group answers by category
  const catScores = {};
  userAnswers.forEach((ans, i) => {
    const cat = QUESTIONS[i].category;
    if (!catScores[cat]) catScores[cat] = [];
    catScores[cat].push(ans.econScore || 0);
  });
  
  // Create bar for each answered question
  userAnswers.forEach((ans, i) => {
    const q = QUESTIONS[i];
    // Normalize score: -2 to +2 => 0% to 100%
    const eScore = ((ans.econScore + 2) / 4) * 100;
    const color = eScore < 35 ? 'var(--left-color)' : eScore > 65 ? 'var(--right-color)' : 'var(--center-color)';
    
    const label = eScore < 35 ? 'Izq' : eScore > 65 ? 'Der' : 'Centro';
    
    const div = document.createElement('div');
    div.className = 'score-bar-item';
    div.innerHTML = `
      <span class="score-bar-label">${q.category}</span>
      <div class="score-bar-track">
        <div class="score-bar-fill" style="width:${eScore}%; background:${color}"></div>
      </div>
      <span class="score-bar-val">${label}</span>
    `;
    container.appendChild(div);
  });
}

function renderCandidateDropdown() {
  const dropdown = document.getElementById('candidateDropdown');
  dropdown.innerHTML = '';

  // Ordenar por % de match para que el usuario vea primero a los más afines
  const ranked = getRankedCandidates(userAnswers);

  ranked.forEach((entry, idx) => {
    const c = entry.candidate;
    const matchPct = entry.match;

    const div = document.createElement('div');
    div.className = 'dropdown-option';
    div.onclick = () => selectCandidateById(c.id);

    const partyClass = c.ideology === 'izquierda' ? 'party-left' : c.ideology === 'derecha' ? 'party-right' : 'party-center';
    const topBadge = idx === 0 ? '<span class="top-match-badge">★ Mejor match</span>' : '';
    const matchColor = matchPct >= 70 ? 'var(--center-color)' : matchPct >= 45 ? 'var(--gold)' : 'var(--left-color)';

    div.innerHTML = `
      <div class="dropdown-row">
        <div class="dropdown-info">
          <strong>${c.name}</strong>
          <span class="party-tag ${partyClass}">${c.party}</span>
        </div>
        <div class="dropdown-match" style="color:${matchColor}">${matchPct}%</div>
      </div>
      ${topBadge}
    `;
    dropdown.appendChild(div);
  });
}

function toggleCandidateDropdown() {
  document.getElementById('candidateSelect').classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-select')) {
    document.getElementById('candidateSelect').classList.remove('open');
  }
});

function selectCandidateById(id) {
  selectedCandidateId = id;
  const candidate = CANDIDATES.find(c => c.id === id);
  if (!candidate) return;
  
  document.getElementById('selectedCandidateName').textContent = candidate.name;
  document.getElementById('candidateSelect').classList.remove('open');
  
  renderMatchPanel(candidate);
}

function renderMatchPanel(candidate) {
  const panel = document.getElementById('matchPanel');
  panel.style.display = 'block';
  
  // Match percentage
  const matchPct = calculateMatch(userAnswers, candidate);
  
  // Avatar
  const avatarEl = document.getElementById('matchAvatar');
  avatarEl.textContent = candidate.avatar;
  avatarEl.style.background = `linear-gradient(135deg, ${candidate.avatarColor[0]}, ${candidate.avatarColor[1]})`;
  
  document.getElementById('matchName').textContent = candidate.name;
  document.getElementById('matchParty').textContent = candidate.party;
  document.getElementById('matchPctBig').textContent = matchPct + '%';
  document.getElementById('matchSlogan').textContent = candidate.slogan;

  // Descripción + fórmula presidencial (vicepresidente)
  const descEl = document.getElementById('matchDescription');
  descEl.innerHTML = '';
  if (candidate.vp) {
    const vpLine = document.createElement('p');
    vpLine.className = 'match-vp-line';
    vpLine.innerHTML = `<strong>Fórmula vicepresidencial:</strong> ${candidate.vp}`;
    descEl.appendChild(vpLine);
  }
  const descPara = document.createElement('p');
  descPara.textContent = candidate.description;
  descEl.appendChild(descPara);
  
  // Color pct based on match
  const pctEl = document.getElementById('matchPctBig');
  if (matchPct >= 70) pctEl.style.color = 'var(--center-color)';
  else if (matchPct >= 40) pctEl.style.color = 'var(--gold)';
  else pctEl.style.color = 'var(--left-color)';
  
  // Per-topic bars
  const barsContainer = document.getElementById('matchBars');
  barsContainer.innerHTML = '';
  
  const topics = Object.keys(candidate.positions);
  topics.forEach(topic => {
    const cPos = candidate.positions[topic]; // -2 to +2
    // Find user's answer for this topic
    const qIdx = QUESTIONS.findIndex(q => q.category === topic);
    let userPos = 0;
    if (qIdx >= 0 && userAnswers[qIdx]) {
      userPos = userAnswers[qIdx].econScore || 0;
    }
    
    const diff = Math.abs(userPos - cPos);
    const topicMatch = Math.round((1 - diff / 4) * 100);
    const color = topicMatch >= 70 ? 'var(--center-color)' : topicMatch >= 40 ? 'var(--gold)' : '#FF6B6B';
    
    const row = document.createElement('div');
    row.className = 'match-bar-row';
    row.innerHTML = `
      <span class="match-bar-label">${topic}</span>
      <div class="match-bar-track">
        <div class="match-bar-fill" style="width:${topicMatch}%; background:${color}"></div>
      </div>
      <span class="match-bar-pct">${topicMatch}%</span>
    `;
    barsContainer.appendChild(row);
  });
  
  // Smooth scroll to panel
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function downloadPlan() {
  if (!selectedCandidateId) return;
  const candidate = CANDIDATES.find(c => c.id === selectedCandidateId);
  if (!candidate || !candidate.planUrl || candidate.planUrl === '#') {
    alert('El plan de gobierno de este candidato aún no está disponible. Visita su sitio web oficial.');
    return;
  }
  window.open(candidate.planUrl, '_blank');
}

function downloadResult() {
  // Use html2canvas to capture the result card
  const element = document.getElementById('resultCard');
  
  if (typeof html2canvas === 'undefined') {
    alert('Para descargar la imagen, necesitas conexión a internet para cargar la librería html2canvas.');
    return;
  }
  
  html2canvas(element, {
    backgroundColor: '#0A1A4D',
    scale: 2,
    useCORS: true,
    allowTaint: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'mi-match-presidencial-colombia-2026.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error('Error generating image:', err);
    alert('No se pudo generar la imagen. Intenta de nuevo.');
  });
}

function shareResult() {
  const profile = getProfile(userEcon, userLib);
  const text = `Hice el Match Presidencial Colombia 2026 y soy: ${profile.label} (${profile.badge}) 🇨🇴\n¿Y tú?`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Mi Match Presidencial Colombia 2026',
      text: text,
      url: window.location.origin + '/index.html'
    });
  } else {
    // Copy to clipboard
    navigator.clipboard.writeText(text + '\n' + window.location.origin).then(() => {
      showToast('¡Texto copiado al portapapeles!');
    });
  }
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
    background:var(--gold); color:var(--dark); padding:12px 24px;
    border-radius:8px; font-weight:600; font-size:14px;
    z-index:9999; animation:fadeUp 0.3s ease;
    font-family:'IBM Plex Sans',sans-serif;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', initResults);
