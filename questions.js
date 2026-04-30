// ==========================================
// PREGUNTAS DEL CUESTIONARIO IDEOLÓGICO
// Escala de respuestas:
//   econScore: -2 (izquierda) a +2 (derecha) en economía
//   libScore:  -2 (autoritario) a +2 (libertario) en libertades civiles
// ==========================================

const QUESTIONS = [
  {
    id: 1,
    category: "ECONOMÍA",
    text: "¿Cuál debe ser el papel del Estado en la economía colombiana?",
    options: [
      {
        label: "A",
        text: "El Estado debe controlar sectores estratégicos: petróleo, minería, bancos y servicios básicos.",
        econScore: -2, libScore: -1
      },
      {
        label: "B",
        text: "El Estado debe regular la economía, garantizar competencia justa y proteger a trabajadores.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "El Estado debe ser árbitro, interviniendo solo cuando el mercado falla gravemente.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "El Estado debe reducirse al mínimo: libre mercado, privatizaciones y menos impuestos.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 2,
    category: "SEGURIDAD",
    text: "¿Cómo debe Colombia enfrentar a los grupos armados ilegales?",
    options: [
      {
        label: "A",
        text: "Diálogo y paz total: negociar con todos los grupos, atacar las causas sociales del conflicto.",
        econScore: -1, libScore: 1
      },
      {
        label: "B",
        text: "Enfoque mixto: negociar con quienes quieran paz, presión militar con quienes no.",
        econScore: 0, libScore: 0
      },
      {
        label: "C",
        text: "Fortalecer inteligencia, fuerza pública y tecnología; negociación solo en condiciones favorables.",
        econScore: 1, libScore: -1
      },
      {
        label: "D",
        text: "Mano dura total: combate militar sin negociación, más presupuesto para las fuerzas armadas.",
        econScore: 1, libScore: -2
      }
    ]
  },
  {
    id: 3,
    category: "SALUD",
    text: "¿Cómo debe funcionar el sistema de salud en Colombia?",
    options: [
      {
        label: "A",
        text: "Sistema público universal: el Estado financia y gestiona directamente la salud de todos.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Sistema mixto fortalecido: más recursos públicos, regular las EPS para que sirvan mejor.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Mantener el modelo actual con reformas puntuales: competencia entre operadores con supervisión.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "Privatizar y desregular: la competencia entre aseguradoras mejorará la calidad.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 4,
    category: "EDUCACIÓN",
    text: "¿Cuál debe ser el modelo educativo en Colombia?",
    options: [
      {
        label: "A",
        text: "Educación pública gratuita de calidad desde preescolar hasta universidad, financiada por el Estado.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Fortalecer lo público con subsidios, pero permitir colegios y universidades privadas con regulación.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Vouchers educativos: el Estado paga pero las familias eligen entre instituciones públicas y privadas.",
        econScore: 1, libScore: 1
      },
      {
        label: "D",
        text: "Mercado educativo libre: competencia entre instituciones eleva la calidad; el Estado solo regula.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 5,
    category: "PAZ Y CONFLICTO",
    text: "¿Qué opinas del proceso de Paz Total del gobierno Petro?",
    options: [
      {
        label: "A",
        text: "Es el camino correcto: sin paz no hay desarrollo. Hay que negociar con todos.",
        econScore: -1, libScore: 1
      },
      {
        label: "B",
        text: "La idea es buena pero la ejecución fue mala. Se necesita una paz más exigente.",
        econScore: 0, libScore: 0
      },
      {
        label: "C",
        text: "Fue un error: la paz negociada es imposible con terroristas; solo entrega impunidad.",
        econScore: 1, libScore: -1
      },
      {
        label: "D",
        text: "No hay nada que negociar. Estos grupos deben ser derrotados militarmente.",
        econScore: 1, libScore: -2
      }
    ]
  },
  {
    id: 6,
    category: "IMPUESTOS",
    text: "¿Cómo deben financiarse los servicios públicos en Colombia?",
    options: [
      {
        label: "A",
        text: "Impuestos progresivos altos a grandes empresas y patrimonios; renta básica para los más pobres.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Sistema tributario justo: quienes más ganan, más pagan; formalizar la economía.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Reducir impuestos para atraer inversión; los privados crean empleo y riqueza.",
        econScore: 1, libScore: 1
      },
      {
        label: "D",
        text: "Bajar impuestos drásticamente al estilo Milei: eficiencia del gasto público, no más cobros.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 7,
    category: "MEDIO AMBIENTE",
    text: "¿Qué debe hacer Colombia con su industria petrolera y minera?",
    options: [
      {
        label: "A",
        text: "Transición inmediata: cerrar nuevas exploraciones y apostar por energías renovables.",
        econScore: -2, libScore: 1
      },
      {
        label: "B",
        text: "Transición gradual: usar ingresos del petróleo para financiar la sustitución energética.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Mantener extracción con mejores controles ambientales; diversificar pero no frenar el motor.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "Expandir la exploración: Colombia tiene recursos que debe explotar para su desarrollo.",
        econScore: 2, libScore: -1
      }
    ]
  },
  {
    id: 8,
    category: "DROGAS",
    text: "¿Cuál debe ser la política de Colombia frente a las drogas?",
    options: [
      {
        label: "A",
        text: "Legalización regulada del cannabis y sustitución voluntaria de cultivos ilícitos con apoyo estatal.",
        econScore: -1, libScore: 2
      },
      {
        label: "B",
        text: "Descriminalizar el consumo, enfocarse en los grandes carteles, apoyar la sustitución.",
        econScore: 0, libScore: 1
      },
      {
        label: "C",
        text: "Mantener la política actual: erradicación forzada y cooperación con EE.UU.",
        econScore: 0, libScore: -1
      },
      {
        label: "D",
        text: "Guerra total contra el narcotráfico: más aspersión, más extradiciones, mano dura.",
        econScore: 0, libScore: -2
      }
    ]
  },
  {
    id: 9,
    category: "TIERRAS",
    text: "¿Cómo debe Colombia resolver el problema del acceso a la tierra?",
    options: [
      {
        label: "A",
        text: "Reforma agraria profunda: redistribuir tierras improductivas a campesinos y víctimas.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Titulación masiva, crédito y tecnología para pequeños agricultores.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Proteger la propiedad privada; el mercado de tierras asignará recursos eficientemente.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "No tocar la propiedad privada: incentivar la agroindustria grande para alimentar al país.",
        econScore: 2, libScore: -1
      }
    ]
  },
  {
    id: 10,
    category: "DERECHOS",
    text: "¿Cómo debe Colombia abordar los derechos de la comunidad LGBTQ+?",
    options: [
      {
        label: "A",
        text: "Plena igualdad legal: matrimonio, adopción y protecciones específicas contra discriminación.",
        econScore: -1, libScore: 2
      },
      {
        label: "B",
        text: "Proteger contra discriminación pero con debate abierto sobre adopción y matrimonio.",
        econScore: 0, libScore: 1
      },
      {
        label: "C",
        text: "Respetar orientaciones privadas, pero el Estado no debe promover agendas de género.",
        econScore: 0, libScore: -1
      },
      {
        label: "D",
        text: "Defender la familia tradicional; estos temas deben definirse por referéndum popular.",
        econScore: 1, libScore: -1
      }
    ]
  },
  {
    id: 11,
    category: "EMPLEO",
    text: "¿Cómo debe Colombia mejorar el empleo y los salarios?",
    options: [
      {
        label: "A",
        text: "Fortalecer sindicatos, subir salario mínimo significativamente, jornada laboral de 40 horas.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Empleo decente: formalización, subir salarios con productividad, protecciones laborales sólidas.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Flexibilizar para crear más empleo formal; menos cargas a empresas impulsa contratación.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "Desregulación laboral total: contratos libres, sin salario mínimo; el mercado fija los salarios.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 12,
    category: "CORRUPCIÓN",
    text: "¿Cuál es la raíz de la corrupción en Colombia y cómo combatirla?",
    options: [
      {
        label: "A",
        text: "La corrupción viene del poder económico; hay que reformar el modelo político y económico.",
        econScore: -2, libScore: 1
      },
      {
        label: "B",
        text: "Fortalecer instituciones, contraloría, fiscalía independiente y participación ciudadana.",
        econScore: -1, libScore: 1
      },
      {
        label: "C",
        text: "Menos Estado es menos corrupción: privatizar reduce las oportunidades de robo.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "Penas severas, cadena perpetua para corruptos; castigo ejemplar que disuada.",
        econScore: 0, libScore: -2
      }
    ]
  },
  {
    id: 13,
    category: "RELACIONES INTERNACIONALES",
    text: "¿Con quién debe alinearse Colombia en política exterior?",
    options: [
      {
        label: "A",
        text: "Con América Latina y el Sur Global; autonomía frente a EE.UU., relaciones con Venezuela y Cuba.",
        econScore: -2, libScore: 1
      },
      {
        label: "B",
        text: "Política exterior independiente: relaciones con todos, priorizando los intereses colombianos.",
        econScore: 0, libScore: 0
      },
      {
        label: "C",
        text: "Alianza con EE.UU. y occidente: tratados de libre comercio y cooperación en seguridad.",
        econScore: 1, libScore: 0
      },
      {
        label: "D",
        text: "Colombia debe ser el líder de una alianza latinoamericana pro-libre mercado y democracia liberal.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 14,
    category: "VIVIENDA",
    text: "¿Cómo debe el Estado abordar la crisis de vivienda en Colombia?",
    options: [
      {
        label: "A",
        text: "Construcción masiva de vivienda pública; el Estado como constructor directo para los más pobres.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Subsidios robustos, créditos blandos y regulación de arrendamientos para estratos bajos.",
        econScore: -1, libScore: 0
      },
      {
        label: "C",
        text: "Simplificar permisos y normas; desregular el sector construcción para bajar precios.",
        econScore: 1, libScore: 1
      },
      {
        label: "D",
        text: "Dejar que el mercado resuelva; los subsidios distorsionan precios y generan ineficiencias.",
        econScore: 2, libScore: 1
      }
    ]
  },
  {
    id: 15,
    category: "MODELO DE PAÍS",
    text: "¿Cuál es la visión de Colombia que más te representa?",
    options: [
      {
        label: "A",
        text: "Una Colombia soberana, con Estado fuerte, que reduzca desigualdades y proteja el medioambiente.",
        econScore: -2, libScore: 0
      },
      {
        label: "B",
        text: "Una Colombia moderna, con instituciones sólidas, igualdad de oportunidades y respeto a derechos.",
        econScore: -1, libScore: 1
      },
      {
        label: "C",
        text: "Una Colombia competitiva, abierta al mundo, con reglas claras y emprendimiento como motor.",
        econScore: 1, libScore: 1
      },
      {
        label: "D",
        text: "Una Colombia de orden, con valores tradicionales, seguridad real y libre empresa sin trabas.",
        econScore: 2, libScore: -1
      }
    ]
  }
];

// Category mapping for score breakdown
const CATEGORIES = [
  "ECONOMÍA", "SEGURIDAD", "SALUD", "EDUCACIÓN", "PAZ Y CONFLICTO",
  "IMPUESTOS", "MEDIO AMBIENTE", "DROGAS", "TIERRAS",
  "DERECHOS", "EMPLEO", "CORRUPCIÓN", "RELACIONES EXTERIORES",
  "VIVIENDA", "MODELO DE PAÍS"
];
