// ==========================================
// CANDIDATOS PRESIDENCIALES OFICIALES COLOMBIA 2026
// Lista oficial de 14 candidatos inscritos.
// Coordenadas ideológicas (estimadas a partir de declaraciones públicas y trayectoria):
//   econScore: -2 (izquierda / Estado fuerte) a +2 (derecha / libre mercado)
//   libScore:  -2 (autoritario) a +2 (libertario)
// positions: posición por tema, escala -2 a +2 en eje económico/de política pública
// ==========================================

const CANDIDATES = [
  {
    id: 1,
    name: "Clara Eugenia López Obregón",
    vp: "María Consuelo del Río Mantilla",
    party: "Partido Esperanza Democrática",
    ideology: "izquierda",
    slogan: "\"Esperanza democrática para Colombia\"",
    avatar: "C",
    avatarColor: ["#FF6B6B", "#B30C1F"],
    econScore: -1.4,
    libScore: 1.0,
    description: "Economista, ex alcaldesa encargada de Bogotá y ex ministra de Trabajo. Defiende un Estado social fuerte, justicia redistributiva, profundización de la democracia y derechos laborales. Su propuesta combina socialdemocracia con institucionalidad.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": -1, "SEGURIDAD": 0, "SALUD": -2,
      "EDUCACIÓN": -2, "PAZ Y CONFLICTO": -1, "IMPUESTOS": -1,
      "MEDIO AMBIENTE": -1, "DROGAS": 0, "TIERRAS": -1,
      "DERECHOS": 1, "EMPLEO": -2, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": 0, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  },
  {
    id: 2,
    name: "Óscar Mauricio Lizcano Arango",
    vp: "Adriana María Ramírez Martínez",
    party: "Coalición F.A.M.I.L.I.A",
    ideology: "centro",
    slogan: "\"Unión por una Colombia que funcione\"",
    avatar: "O",
    avatarColor: ["#FFD60A", "#A88500"],
    econScore: 0.6,
    libScore: 0.0,
    description: "Ex ministro de las TIC, ex senador y ex presidente del Congreso. Conservador moderado con larga trayectoria en partidos tradicionales. Propone gobernabilidad, modernización del Estado, conectividad y reactivación económica con apertura.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 1, "SEGURIDAD": 1, "SALUD": 0,
      "EDUCACIÓN": 0, "PAZ Y CONFLICTO": 0, "IMPUESTOS": 1,
      "MEDIO AMBIENTE": 0, "DROGAS": 0, "TIERRAS": 1,
      "DERECHOS": -1, "EMPLEO": 0, "CORRUPCIÓN": 0,
      "RELACIONES INTERNACIONALES": 1, "VIVIENDA": 0, "MODELO DE PAÍS": 0
    }
  },
  {
    id: 3,
    name: "Raúl Santiago Botero Jaramillo",
    vp: "Carlos Fernando Cuevas Romero",
    party: "Romper el sistema",
    ideology: "derecha",
    slogan: "\"Romper el sistema, reconstruir el país\"",
    avatar: "R",
    avatarColor: ["#4A86FF", "#0A1A4D"],
    econScore: 1.4,
    libScore: -0.6,
    description: "Empresario y candidato outsider antiestablecimiento. Su discurso combina libre mercado, denuncia a la clase política tradicional y un llamado a refundar instituciones. Se identifica con liderazgos disruptivos al estilo Milei en Argentina.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 2, "SEGURIDAD": 1, "SALUD": 1,
      "EDUCACIÓN": 1, "PAZ Y CONFLICTO": 1, "IMPUESTOS": 2,
      "MEDIO AMBIENTE": 1, "DROGAS": -1, "TIERRAS": 1,
      "DERECHOS": 0, "EMPLEO": 2, "CORRUPCIÓN": 1,
      "RELACIONES INTERNACIONALES": 1, "VIVIENDA": 2, "MODELO DE PAÍS": 1
    }
  },
  {
    id: 4,
    name: "Miguel Uribe Londoño",
    vp: "Luisa Fernanda Villegas Araque",
    party: "Partido Demócrata Colombiano",
    ideology: "derecha",
    slogan: "\"Recuperar a Colombia\"",
    avatar: "M",
    avatarColor: ["#4A86FF", "#0A1A4D"],
    econScore: 1.6,
    libScore: -1.0,
    description: "Político conservador heredero del legado uribista, ex congresista y dirigente del Partido Demócrata Colombiano. Defiende seguridad democrática, libre mercado, reducción del gasto público y rechazo frontal a las reformas del gobierno Petro.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 2, "SEGURIDAD": 2, "SALUD": 1,
      "EDUCACIÓN": 1, "PAZ Y CONFLICTO": 2, "IMPUESTOS": 2,
      "MEDIO AMBIENTE": 1, "DROGAS": -2, "TIERRAS": 2,
      "DERECHOS": -1, "EMPLEO": 1, "CORRUPCIÓN": 0,
      "RELACIONES INTERNACIONALES": 1, "VIVIENDA": 1, "MODELO DE PAÍS": 2
    }
  },
  {
    id: 5,
    name: "Sondra Macollins Garvin Pinto",
    vp: "Leonardo Karam Helo",
    party: "Sondra Macollins, la abogada de hierro",
    ideology: "derecha",
    slogan: "\"Mano firme, ley para todos\"",
    avatar: "S",
    avatarColor: ["#4A86FF", "#1654E0"],
    econScore: 1.0,
    libScore: -1.2,
    description: "Abogada penalista conocida por su discurso de mano dura contra la criminalidad. Su propuesta enfatiza orden, seguridad ciudadana, fortalecimiento de la justicia y políticas conservadoras frente a reformas sociales del gobierno.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 1, "SEGURIDAD": 2, "SALUD": 0,
      "EDUCACIÓN": 0, "PAZ Y CONFLICTO": 2, "IMPUESTOS": 1,
      "MEDIO AMBIENTE": 0, "DROGAS": -2, "TIERRAS": 1,
      "DERECHOS": -1, "EMPLEO": 1, "CORRUPCIÓN": -2,
      "RELACIONES INTERNACIONALES": 1, "VIVIENDA": 1, "MODELO DE PAÍS": 1
    }
  },
  {
    id: 6,
    name: "Iván Cepeda Castro",
    vp: "Aída Marina Quilcué Vivas",
    party: "Movimiento Político Pacto Histórico",
    ideology: "izquierda",
    slogan: "\"Continuar el cambio con dignidad\"",
    avatar: "I",
    avatarColor: ["#FF6B6B", "#8B0000"],
    econScore: -1.8,
    libScore: 1.4,
    description: "Senador, defensor de derechos humanos y figura central del Pacto Histórico. Su agenda gira en torno a la verdad histórica, justicia transicional, paz total, reformas sociales profundas y la defensa de las víctimas del conflicto.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": -2, "SEGURIDAD": -1, "SALUD": -2,
      "EDUCACIÓN": -2, "PAZ Y CONFLICTO": -2, "IMPUESTOS": -2,
      "MEDIO AMBIENTE": -2, "DROGAS": 1, "TIERRAS": -2,
      "DERECHOS": 2, "EMPLEO": -2, "CORRUPCIÓN": -2,
      "RELACIONES INTERNACIONALES": -2, "VIVIENDA": -2, "MODELO DE PAÍS": -2
    }
  },
  {
    id: 7,
    name: "Abelardo Gabriel de la Espriella",
    vp: "José Manuel Restrepo Abondano",
    party: "Defensores de la Patria",
    ideology: "derecha",
    slogan: "\"Mano de hierro, corazón de pueblo\"",
    avatar: "A",
    avatarColor: ["#1654E0", "#0A1A4D"],
    econScore: 1.9,
    libScore: -1.7,
    description: "Abogado y figura mediática conservadora. Propone un giro radical hacia el libre mercado al estilo Milei: reducción drástica del Estado, combate militar sin tregua a grupos armados, libre porte de armas y rechazo frontal a las agendas progresistas.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 2, "SEGURIDAD": 2, "SALUD": 2,
      "EDUCACIÓN": 2, "PAZ Y CONFLICTO": 2, "IMPUESTOS": 2,
      "MEDIO AMBIENTE": 1, "DROGAS": -2, "TIERRAS": 2,
      "DERECHOS": -2, "EMPLEO": 2, "CORRUPCIÓN": -2,
      "RELACIONES INTERNACIONALES": 2, "VIVIENDA": 2, "MODELO DE PAÍS": 2
    }
  },
  {
    id: 8,
    name: "Claudia Nayibe López Hernández",
    vp: "Leonardo Humberto Huerta Gutiérrez",
    party: "Con Claudia Imparables",
    ideology: "centro",
    slogan: "\"Imparables por una Colombia moderna\"",
    avatar: "C",
    avatarColor: ["#FFD60A", "#1654E0"],
    econScore: -0.4,
    libScore: 1.5,
    description: "Ex alcaldesa de Bogotá, ex senadora de la Alianza Verde y figura del progresismo liberal. Defiende lucha frontal contra la corrupción, equidad de género, transición ecológica y modernización institucional con responsabilidad fiscal.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 0, "SEGURIDAD": 0, "SALUD": -1,
      "EDUCACIÓN": -1, "PAZ Y CONFLICTO": -1, "IMPUESTOS": 0,
      "MEDIO AMBIENTE": -2, "DROGAS": 1, "TIERRAS": -1,
      "DERECHOS": 2, "EMPLEO": -1, "CORRUPCIÓN": -2,
      "RELACIONES INTERNACIONALES": 0, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  },
  {
    id: 9,
    name: "Paloma Susana Valencia Laserna",
    vp: "Juan Daniel Oviedo Arango",
    party: "Partido Centro Democrático",
    ideology: "derecha",
    slogan: "\"Orden, libertad y oportunidades\"",
    avatar: "P",
    avatarColor: ["#4A86FF", "#0A1A4D"],
    econScore: 1.7,
    libScore: -0.8,
    description: "Senadora del Centro Democrático, abogada y heredera política del uribismo. Su propuesta combina libre mercado, seguridad democrática, federalismo regional fuerte para departamentos y oposición a las reformas del gobierno Petro.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 2, "SEGURIDAD": 2, "SALUD": 1,
      "EDUCACIÓN": 1, "PAZ Y CONFLICTO": 2, "IMPUESTOS": 2,
      "MEDIO AMBIENTE": 1, "DROGAS": -1, "TIERRAS": 1,
      "DERECHOS": -1, "EMPLEO": 1, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": 1, "VIVIENDA": 1, "MODELO DE PAÍS": 2
    }
  },
  {
    id: 10,
    name: "Sergio Fajardo Valderrama",
    vp: "Edna Cristina del Socorro Bonilla Seba",
    party: "Partido Político Dignidad & Compromiso",
    ideology: "centro",
    slogan: "\"La educación es el camino\"",
    avatar: "S",
    avatarColor: ["#FFD60A", "#A88500"],
    econScore: 0.2,
    libScore: 1.0,
    description: "Matemático, ex alcalde de Medellín y ex gobernador de Antioquia. Reconocido por transformar Medellín mediante educación, cultura e innovación. Propone institucionalidad fuerte, lucha contra la corrupción y desarrollo basado en conocimiento.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 0, "SEGURIDAD": 0, "SALUD": 0,
      "EDUCACIÓN": -1, "PAZ Y CONFLICTO": 0, "IMPUESTOS": 0,
      "MEDIO AMBIENTE": -1, "DROGAS": 1, "TIERRAS": 0,
      "DERECHOS": 1, "EMPLEO": 0, "CORRUPCIÓN": -2,
      "RELACIONES INTERNACIONALES": 0, "VIVIENDA": 0, "MODELO DE PAÍS": 0
    }
  },
  {
    id: 11,
    name: "Roy Leonardo Barreras Montealegre",
    vp: "Martha Lucía Zamora Ávila",
    party: "Partido Político La Fuerza",
    ideology: "izquierda",
    slogan: "\"La fuerza del cambio social\"",
    avatar: "R",
    avatarColor: ["#FF6B6B", "#B30C1F"],
    econScore: -1.1,
    libScore: 0.8,
    description: "Ex presidente del Senado, ex embajador y arquitecto político del Pacto Histórico. Propone profundizar reformas sociales, defender el acuerdo de paz, fortalecer la salud pública y mantener una política exterior con autonomía latinoamericana.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": -1, "SEGURIDAD": 0, "SALUD": -2,
      "EDUCACIÓN": -1, "PAZ Y CONFLICTO": -2, "IMPUESTOS": -1,
      "MEDIO AMBIENTE": -1, "DROGAS": 0, "TIERRAS": -1,
      "DERECHOS": 1, "EMPLEO": -1, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": -1, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  },
  {
    id: 12,
    name: "Gustavo Matamoros Camacho",
    vp: "Robinson Alonso Giraldo Mira",
    party: "Partido Ecologista Colombiano",
    ideology: "izquierda",
    slogan: "\"Una Colombia verde y viva\"",
    avatar: "G",
    avatarColor: ["#5DFFA3", "#0A6B3A"],
    econScore: -0.9,
    libScore: 1.3,
    description: "Líder del ecologismo colombiano. Su candidatura pone en el centro la transición energética, la protección de los ecosistemas, los derechos de las comunidades étnicas y campesinas, y un modelo económico bajo en carbono y descentralizado.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": -1, "SEGURIDAD": -1, "SALUD": -1,
      "EDUCACIÓN": -1, "PAZ Y CONFLICTO": -1, "IMPUESTOS": -1,
      "MEDIO AMBIENTE": -2, "DROGAS": 1, "TIERRAS": -1,
      "DERECHOS": 2, "EMPLEO": -1, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": -1, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  },
  {
    id: 13,
    name: "Luis Gilberto Murillo Urrutia",
    vp: "Luz María Zapata Zapata",
    party: "Luis Gilberto soy yo",
    ideology: "centro",
    slogan: "\"Una Colombia diversa, justa y posible\"",
    avatar: "L",
    avatarColor: ["#FFD60A", "#1654E0"],
    econScore: -0.4,
    libScore: 1.0,
    description: "Ex ministro de Ambiente y de Relaciones Exteriores, ingeniero y líder afrocolombiano. Combina experiencia internacional con agenda ambiental ambiciosa, equidad étnica y territorial, y visión de desarrollo sostenible para las regiones excluidas.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": 0, "SEGURIDAD": 0, "SALUD": -1,
      "EDUCACIÓN": -1, "PAZ Y CONFLICTO": -1, "IMPUESTOS": 0,
      "MEDIO AMBIENTE": -2, "DROGAS": 1, "TIERRAS": -1,
      "DERECHOS": 1, "EMPLEO": -1, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": 0, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  },
  {
    id: 14,
    name: "Carlos Eduardo Caicedo Omar",
    vp: "Nelson Javier Alarcón Suárez",
    party: "Caicedo",
    ideology: "izquierda",
    slogan: "\"Fuerza Ciudadana para transformar\"",
    avatar: "C",
    avatarColor: ["#FF6B6B", "#B30C1F"],
    econScore: -1.2,
    libScore: 0.9,
    description: "Ex gobernador del Magdalena, ex alcalde de Santa Marta y fundador de Fuerza Ciudadana. Su programa combina socialdemocracia, fortalecimiento del Estado social, agenda ambiental Caribe y autonomía regional para los territorios.",
    planUrl: "https://www.registraduria.gov.co/elecciones-2026",
    positions: {
      "ECONOMÍA": -1, "SEGURIDAD": 0, "SALUD": -2,
      "EDUCACIÓN": -2, "PAZ Y CONFLICTO": -1, "IMPUESTOS": -1,
      "MEDIO AMBIENTE": -2, "DROGAS": 1, "TIERRAS": -2,
      "DERECHOS": 1, "EMPLEO": -1, "CORRUPCIÓN": -1,
      "RELACIONES INTERNACIONALES": -1, "VIVIENDA": -1, "MODELO DE PAÍS": -1
    }
  }
];

// Función para obtener candidato por ID
function getCandidateById(id) {
  return CANDIDATES.find(c => c.id === id);
}

// Map SVG coordinates: convert ideological scores to SVG position
// SVG viewBox: 0 0 500 600, center at (250, 300)
// econScore -2 to +2 maps to x: 80 to 420 (left = izquierda = lower x)
// libScore -2 to +2 maps to y: 500 to 100 (authoritarian=bottom, libertarian=top)
function scoreToMapCoords(econScore, libScore) {
  const e = Math.max(-2, Math.min(2, econScore));
  const l = Math.max(-2, Math.min(2, libScore));
  const x = 250 + (e / 2) * 170;
  const y = 300 - (l / 2) * 200;
  return { x: Math.round(x), y: Math.round(y) };
}

// ==========================================
// ALGORITMO DE MATCH (preciso)
// Combina:
//   1. Match ideológico global (econ + lib promedio del usuario vs candidato)  -> 35%
//   2. Match tema-por-tema (respuesta del usuario en cada categoría vs posición del candidato en esa categoría) -> 65%
// Devuelve un porcentaje 0-100 redondeado.
// ==========================================
function calculateMatch(userAnswers, candidate) {
  if (!userAnswers || userAnswers.length === 0) return 0;

  // Promedios del usuario
  const userEcon = userAnswers.reduce((s, a) => s + (a.econScore || 0), 0) / userAnswers.length;
  const userLib  = userAnswers.reduce((s, a) => s + (a.libScore  || 0), 0) / userAnswers.length;

  // 1. Similitud ideológica global
  const econDiff = Math.abs(userEcon - candidate.econScore);
  const libDiff  = Math.abs(userLib  - candidate.libScore);
  // Cada eje va de -2 a +2, diferencia máxima por eje = 4, total máx = 8
  const ideologicalSim = Math.max(0, 1 - (econDiff + libDiff) / 8);

  // 2. Similitud tema-por-tema
  let topicSimSum = 0;
  let topicCount = 0;
  userAnswers.forEach((ans, i) => {
    if (typeof QUESTIONS === 'undefined' || !QUESTIONS[i]) return;
    const cat = QUESTIONS[i].category;
    const candPos = candidate.positions ? candidate.positions[cat] : undefined;
    if (typeof candPos !== 'number') return;
    const userPos = ans.econScore || 0;
    const diff = Math.abs(userPos - candPos);
    // Diferencia máxima por tema = 4
    const sim = Math.max(0, 1 - diff / 4);
    topicSimSum += sim;
    topicCount++;
  });
  const topicSim = topicCount > 0 ? (topicSimSum / topicCount) : ideologicalSim;

  // Combinación ponderada
  const finalSim = ideologicalSim * 0.35 + topicSim * 0.65;
  return Math.round(Math.max(0, Math.min(1, finalSim)) * 100);
}

// Helper: ordenar candidatos por match descendente
function getRankedCandidates(userAnswers) {
  return CANDIDATES
    .map(c => ({ candidate: c, match: calculateMatch(userAnswers, c) }))
    .sort((a, b) => b.match - a.match);
}
