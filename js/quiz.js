// ==========================================
// QUIZ LOGIC
// ==========================================

let currentQuestion = 0;
let answers = new Array(QUESTIONS.length).fill(null);

function init() {
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;

  // Update progress
  const pct = ((currentQuestion + 1) / total) * 100;
  document.getElementById('progressBar').style.setProperty('--progress', pct + '%');
  document.getElementById('progressText').textContent = `${currentQuestion + 1} / ${total}`;

  // Update meta
  document.getElementById('questionCategory').textContent = q.category;
  document.getElementById('questionNum').textContent = `Pregunta ${currentQuestion + 1} de ${total}`;
  document.getElementById('questionText').textContent = q.text;

  // Render options
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[currentQuestion] === idx ? ' selected' : '');
    btn.onclick = () => selectOption(idx);
    btn.innerHTML = `
      <span class="option-label">${opt.label}</span>
      <span class="option-text">${opt.text}</span>
    `;
    grid.appendChild(btn);
  });

  // Nav buttons
  document.getElementById('btnPrev').style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  
  const btnNext = document.getElementById('btnNext');
  const isLast = currentQuestion === total - 1;
  btnNext.textContent = isLast ? 'Ver resultado →' : 'Siguiente →';
  btnNext.disabled = answers[currentQuestion] === null;

  // Animate card
  const card = document.getElementById('quizCard');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'cardIn 0.35s ease both';
}

function selectOption(idx) {
  answers[currentQuestion] = idx;
  
  // Update UI
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
  
  document.getElementById('btnNext').disabled = false;
  
  // Auto-advance after brief delay
  setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      nextQuestion();
    }
  }, 400);
}

function nextQuestion() {
  if (answers[currentQuestion] === null) return;
  
  if (currentQuestion === QUESTIONS.length - 1) {
    finishQuiz();
    return;
  }
  
  currentQuestion++;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevQuestion() {
  if (currentQuestion === 0) return;
  currentQuestion--;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishQuiz() {
  // Compile answers with scores
  const compiledAnswers = answers.map((ansIdx, qIdx) => {
    if (ansIdx === null) return { econScore: 0, libScore: 0 };
    return QUESTIONS[qIdx].options[ansIdx];
  });
  
  // Save to sessionStorage
  sessionStorage.setItem('quizAnswers', JSON.stringify(compiledAnswers));
  sessionStorage.setItem('quizRaw', JSON.stringify(answers));
  
  // Redirect to results
  window.location.href = 'results.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', init);
