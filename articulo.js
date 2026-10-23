/* =========================================================
   K-Andes · articulo.js
   1) Datos de los 5 artículos  2) Tema y menú  3) Dibujo de la página
   Para editar un texto, cambia solo los datos de ARTICULOS.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. DATOS ----------
     Cada artículo: título, imagen, introducción (lead), secciones,
     ideas clave, preguntas, propuesta de aula y fuentes.
     En "fuentes": url = enlace a la fuente; pdf = enlace directo al PDF (si existe).
     Todo lo que diga "por completar" se resalta en amarillo. */
  var ARTICULOS = [
    {
      id: 1,
      titulo: 'Qué es el Hallyu y cómo llegó al Perú',
      imagen: 'imagenes/articulo-1.jpg',
      alt: 'Ilustración generada con IA de unos auriculares sobre un celular y un mapa del mundo',
      lead: 'Hallyu significa «ola coreana»: así se llama la expansión mundial de la música, las series y otros productos de la cultura popular de Corea del Sur. Este artículo explicará cómo esa ola llegó a las pantallas, los parques y las conversaciones de los jóvenes peruanos.',
      secciones: [
        {
          titulo: 'Una ola con varias capas',
          parrafos: [
            'Hallyu no es solo música. El término agrupa series, cine y K-pop, productos que circulan por pantallas e internet y que hoy forman parte de la vida cotidiana de muchos jóvenes.',
            'Los trabajos revisados lo estudian desde distintos ángulos: como fenómeno cultural, como industria y como una forma de contacto entre culturas. Ordenar esas miradas para el aula es justamente el propósito de esta revista.'
          ]
        },
        {
          titulo: 'De la pantalla a la plaza',
          parrafos: [
            'Según Anchante, Farro y Meléndez (2016), el K-pop surgió en Corea del Sur a fines de los años 90 y se internacionalizó hacia 2008. En el Perú, afirman, no solo contó la música: también contribuyeron las telenovelas coreanas que se emitían por el Canal 5.',
            'Los mismos autores describen el Parque Mariscal Castilla, en Lince, como un gran punto de encuentro donde los jóvenes ensayan coreografías en espacios públicos, sin pasar por academias. Es un ejemplo de cómo una cultura global se apropia de un lugar local.'
          ]
        },
        {
          titulo: '¿Imitar o dialogar?',
          parrafos: [
            'Un estudio sobre jóvenes seguidores del K-pop en Lima combinó observación, entrevistas y una encuesta a 384 jóvenes. Concluye que, a pesar de la influencia coreana, ellos manifestaron que no cambiarían su cultura peruana y que buscan forjar una identidad propia adoptando lo mejor de cada cultura, un fenómeno que sus autores interpretan como interculturalidad.',
            'Otros trabajos matizan el panorama. Barrera Ugarte (2022) estudia cómo jóvenes limeños seguidores del K-pop construyen su propia masculinidad frente a los modelos que ven en los artistas, y Sánchez Cariño (2019) analiza el Hallyu desde la interculturalidad en el contexto mexicano.'
          ]
        }
      ],
      clave: [
        'Hallyu significa «ola coreana» e incluye música, series y cine.',
        'En el Perú se vive también en espacios públicos: parques, plazas y encuentros de baile.',
        'Los estudios revisados no describen el consumo como una pérdida automática de identidad.',
        'En las fuentes revisadas para este prototipo no apareció investigación específica sobre Arequipa.'
      ],
      preguntas: [
        '¿Cómo y cuándo llegó a tu vida un producto cultural coreano?',
        '¿Qué lugares de tu ciudad podrían servir como «punto de encuentro» de una cultura global?',
        '¿Qué diferencia hay entre conocer una cultura y imitarla?'
      ],
      aula: 'Propón una «línea de tiempo personal»: ¿cómo y cuándo llegó a mí este producto cultural? Cada estudiante la dibuja con fechas aproximadas, personas y lugares, sin copiar letras de canciones.',
      fuentes: [
        { ref: 'Anchante, A., Farro, A. y Meléndez, M. (2016). Parque Mariscal Castilla: punto de encuentro para el K-Pop. En Concurso de Investigación en Comunicación. 9na. edición (pp. 90-121). Universidad de Lima.', url: 'https://repositorio.ulima.edu.pe/handle/20.500.12724/4739', etiqueta: 'Ver en el repositorio' },
        { ref: '[Autores y año por completar]. Cultural Influence of K-pop in young people of Lima. [Revista por completar]', url: 'https://journals.continental.edu.pe/index.php/apuntes/article/view/436', etiqueta: 'Ver artículo' },
        { ref: 'Barrera Ugarte, A. (2022). Hacia nuevas formas de ser y pensarse varón en un grupo de jóvenes seguidores del k-pop en Lima. La Colmena, (15), 9-30. Pontificia Universidad Católica del Perú.', url: 'https://repositorio.pucp.edu.pe/index/handle/123456789/194438', pdf: 'https://revistas.pucp.edu.pe/index.php/lacolmena/article/download/26695/25060', etiqueta: 'Ver en el repositorio' },
        { ref: 'Sánchez Cariño, I. (2019). La interculturalidad del fenómeno Hallyu. Surfeando la ola. Memorias del XXI Concurso Lasallista de Investigación, Desarrollo e Innovación (CLIDi 2019).', pdf: 'https://revistasinvestigacion.lasalle.mx/index.php/mclidi/article/download/2121/2388/14511' }
      ]
    },

    {
      id: 2,
      titulo: 'El K-pop y la construcción de la identidad en la adolescencia',
      imagen: 'imagenes/articulo-2.jpg',
      alt: 'Ilustración generada con IA de un adolescente con auriculares en silueta, mirando por una ventana',
      lead: '¿Quién soy? ¿A qué grupo pertenezco? En la adolescencia estas preguntas pesan más que nunca. Este artículo conectará la psicología del desarrollo con la experiencia de ser fan, sin presentar el K-pop ni como culpable ni como solución.',
      secciones: [
        {
          titulo: 'La pregunta de Erikson',
          parrafos: [
            'Según la revisión de Benson y Bundick (2015), Erik Erikson planteó que formar la identidad es la tarea central de la adolescencia: pasar de la confusión sobre «quién soy» a un sentido más estable de uno mismo. En el Perú, Molla Madueño (1986) aplicó esta teoría al diseñar un Test de Identidad para adolescentes de distintos niveles socioculturales.',
            'Esa identidad no se construye en soledad. Erikson habló de una «moratoria psicosocial»: un tiempo en que la sociedad permite probar roles y descubrir cuáles encajan. Cuando un adolescente prueba estilos, gustos y grupos, está haciendo algo esperable en su etapa.'
          ]
        },
        {
          titulo: 'Cuatro maneras de vivir la búsqueda',
          parrafos: [
            'James Marcia propuso cuatro estatus de identidad: difusión (todavía no se explora ni se elige), exclusión (se asumen compromisos sin explorar opciones), moratoria (se explora sin haber decidido) y logro (se exploró y se eligió un compromiso).',
            'Tesouro y colegas (2013) usaron este enfoque para estudiar cómo adolescentes de Girona construyen su identidad en ámbitos como la profesión, la política, la religión, las relaciones sociales y el ocio. Los grupos de fans podrían ubicarse en estos dos últimos. Los propios Benson y Bundick recuerdan que la teoría de Erikson recibió críticas, por ejemplo por presentar etapas demasiado lineales.'
          ]
        },
        {
          titulo: '¿Qué dicen los estudios sobre K-pop?',
          parrafos: [
            'Un estudio cualitativo con universitarias mexicanas (Nigra, 2026) encontró que el K-pop influye en la vida cotidiana —estilos de vestir, preferencias musicales, cohesión de grupo—, pero no transforma de fondo la identidad personal ni reemplaza sus marcos culturales de referencia.',
            'Son hallazgos de otro país y de otra edad. Por eso una de las tareas de K-Andes es preguntar a estudiantes de Arequipa en lugar de suponer.'
          ]
        }
      ],
      clave: [
        'Buscar la identidad es normal y esperable en la adolescencia.',
        'Probar estilos y grupos no es lo mismo que «perder» la identidad.',
        'Dos de los estudios revisados (el de Lima y el de México) no encuentran una sustitución de identidad, aunque vienen de otros contextos.',
        'La teoría de Erikson es un buen punto de partida, con críticas que conviene conocer.'
      ],
      preguntas: [
        '¿Qué parte de lo que eres viene de tu familia, qué parte de tus amistades y qué parte de lo que escuchas o ves?',
        '¿Probar un estilo nuevo es cambiar de identidad o explorar?',
        '¿Qué te gustaría que los adultos entendieran de tus gustos?'
      ],
      aula: 'Mapa de identidad: cada estudiante dibuja tres círculos que se cruzan (familia y comunidad, amistades, cultura global que consume) y escribe en cada zona dos rasgos propios. Después comparten solo lo que quieran compartir.',
      fuentes: [
        { ref: 'Benson, P. L. y Bundick, M. J. (2015). Erikson and adolescent development: Contemporary views on an enduring legacy. Journal of Child and Youth Care Work. [Volumen y páginas por completar]', pdf: 'https://acycpjournal.pitt.edu/ojs/jcycw/article/download/81/65/204' },
        { ref: 'Molla Madueño, M. (1986). La identidad del adolescente: el Test de Identidad. Revista de Psicología, 4(1), 61-71.', url: 'https://doi.org/10.18800/psico.198601.005', etiqueta: 'Ver por DOI' },
        { ref: 'Tesouro, M., Palomanes, M. L., Bonachera, F. y Martínez, L. (2013). Estudio sobre el desarrollo de la identidad en la adolescencia. Tendencias Pedagógicas, 21. Universidad de Girona.', pdf: 'https://dialnet.unirioja.es/descarga/articulo/4184322.pdf' },
        { ref: 'Nigra, S. (2026). K-pop y globalización cultural: su influencia en la vida de estudiantes universitarias mexicanas. Contextualizaciones Latinoamericanas, (35).', url: 'https://doi.org/10.32870/cl.v2i35.8164', pdf: 'https://contexlatin.cucsh.udg.mx/index.php/CL/article/view/8164/7994', etiqueta: 'Ver por DOI' }
      ]
    },

    {
      id: 3,
      titulo: 'Propuesta de encuesta a estudiantes de secundaria en Arequipa',
      imagen: 'imagenes/articulo-3.jpg',
      alt: 'Ilustración generada con IA de manos de un estudiante llenando un cuestionario sobre una mesa',
      lead: 'Antes de preguntar hay que decidir cómo preguntar con respeto. Este artículo presentará una propuesta de encuesta anónima para estudiantes de 12 a 17 años: qué preguntar, cómo redactarlo y qué cuidados éticos exige trabajar con menores de edad. Es una propuesta: todavía no tiene resultados.',
      secciones: [
        {
          titulo: '¿Para qué una encuesta?',
          parrafos: [
            'Gran parte de los estudios sobre K-pop encontrados para este prototipo se centra en Lima u otros países; no apareció investigación específica sobre Arequipa. Una encuesta bien hecha permitiría escuchar a los propios estudiantes en lugar de suponer lo que piensan.',
            'Esta página propone un diseño. No presenta resultados ni datos de estudiantes reales.'
          ]
        },
        {
          titulo: 'Primero, el cuidado',
          parrafos: [
            'El proyecto internacional Ethical Research Involving Children (ERIC), impulsado por UNICEF junto con universidades, ofrece una carta y un compendio con orientaciones para quienes investigan con niñas, niños y adolescentes.',
            'Un artículo reciente sobre formatos de asentimiento (Apuntes de Bioética, 2026) recuerda que consentimiento y asentimiento no son lo mismo: la persona menor de edad acepta participar y, además, quien la representa legalmente debe dar su consentimiento. Cortada y Ortega (2025) señalan tres claves en ciencias sociales: participación, consentimiento y tratamiento de datos personales.'
          ]
        },
        {
          titulo: 'Cómo redactar las preguntas',
          parrafos: ['Algunas reglas básicas para una encuesta escolar:'],
          lista: [
            'Lenguaje claro y cercano a la edad de 12 a 17 años.',
            'Preguntas cortas, con una sola idea cada una.',
            'Participación voluntaria: se puede dejar en blanco o abandonar.',
            'Sin nombres, correos, teléfonos ni datos que identifiquen a nadie.',
            'Evitar preguntas que puedan incomodar o exponer a una persona.'
          ]
        },
        {
          titulo: 'Ejemplos de preguntas (ilustrativos)',
          lista: [
            '¿Qué tipo de música o series disfrutas en tu tiempo libre?',
            '¿Con quién compartes esos intereses?',
            '¿Conoces música o fiestas tradicionales de tu región? Cuéntanos una.',
            '¿Te gustaría que se hablara de estos temas en clase? ¿Cómo?'
          ]
        },
        {
          titulo: 'Antes de aplicarla',
          lista: [
            'Pedir autorización a la dirección del colegio y a las familias, y consultar las normas de la institución o universidad que respalda el estudio.',
            'Probar la encuesta con un grupo pequeño para comprobar que se entiende.',
            'Guardar las respuestas de forma segura y usarlas solo para el fin explicado.'
          ]
        }
      ],
      clave: [
        'Una encuesta con menores exige cuidado ético antes que curiosidad.',
        'Consentimiento de la familia y asentimiento del estudiante son cosas distintas.',
        'Anónima, voluntaria y sin datos personales.',
        'Esta propuesta no contiene resultados.'
      ],
      preguntas: [
        '¿Cómo te sentirías si te hicieran esta pregunta en clase?',
        '¿Qué preguntaría un estudiante que aquí no estamos considerando?',
        '¿Cómo sabríamos que una pregunta incomoda a alguien?'
      ],
      aula: 'Si eres docente, pide a un grupo pequeño de estudiantes que revise el borrador de la encuesta y marque qué preguntas no entienden o les incomodan. Ajusta el borrador antes de aplicarlo.',
      fuentes: [
        { ref: 'Graham, A., Powell, M., Taylor, N., Anderson, D. y Fitzgerald, R. (2013). Ethical Research Involving Children. UNICEF Office of Research – Innocenti.', url: 'https://childethics.com/', etiqueta: 'Ir a childethics.com' },
        { ref: 'Cortada Cortijo, N. y Ortega Puente, G. (2025). Investigación ética con niños, niñas y adolescentes en ciencias sociales. Revista de Bioética y Derecho, (64), 36-54.', url: 'https://doi.org/10.1344/RBD2025.64.48702', etiqueta: 'Ver por DOI' },
        { ref: '[Autores por completar] (2026). Asentimiento informado en la investigación con menores: propuesta de requerimientos mínimos. Apuntes de Bioética, 9(1).', pdf: 'https://revistas.usat.edu.pe/index.php/apuntes/article/download/1442/2027/' }
      ]
    },

    {
      id: 4,
      titulo: 'Cómo usar la cultura juvenil en el aula para trabajar comprensión lectora y ciudadanía',
      imagen: 'imagenes/articulo-4.jpg',
      alt: 'Ilustración generada con IA de estudiantes trabajando en grupo alrededor de una mesa en el aula',
      lead: 'La escuela y la cultura juvenil suelen verse como mundos aparte. Este artículo propondrá cómo usar lo que a los estudiantes les importa —incluida la cultura coreana, pero también sus raíces locales— para trabajar comprensión lectora y ciudadanía, con objetivos de aprendizaje claros.',
      secciones: [
        {
          titulo: 'Dos culturas, una misma aula',
          parrafos: [
            'Santana (2010) analiza, desde la realidad chilena, la tensión entre cultura juvenil y cultura escolar: los jóvenes viven ambas a la vez, mientras la escuela tiende a la uniformidad y deja poco espacio a los estilos juveniles. Su propuesta es mirar esos estilos como un recurso que puede enriquecer la escuela.'
          ]
        },
        {
          titulo: 'Lo cercano también enseña',
          parrafos: [
            'Una tesis sobre una escuela de Educación Intercultural Bilingüe en Huancané (Puno) encontró que los saberes locales entran a la clase de comprensión lectora de forma esporádica y dependen del compromiso de cada docente. Sin embargo, cuando se usan leyendas, costumbres o relatos familiares, los estudiantes muestran más interés, mejoran su comprensión y fortalecen su identidad cultural.',
            'La lección para K-Andes: partir de lo que los estudiantes conocen y valoran —sea una canción coreana o una leyenda de su familia— abre la puerta a leer mejor.'
          ]
        },
        {
          titulo: 'Qué dice el currículo',
          parrafos: [
            'El Currículo Nacional de la Educación Básica organiza el aprendizaje por competencias. Los documentos del Minedu sobre mediación de la lectura vinculan, además, la lectura con el desarrollo de competencias comunicativas para ejercer la ciudadanía. Antes de planificar, revisa en el programa curricular de secundaria qué competencias y desempeños corresponden a tu grado.'
          ]
        },
        {
          titulo: 'Una secuencia posible',
          ordenada: true,
          lista: [
            'Elegir un texto breve ligado al interés de la clase: una reseña, una entrevista o una leyenda.',
            'Antes de leer: predecir de qué trata y qué sabemos del tema.',
            'Durante la lectura: subrayar la idea principal y un dato que la apoye.',
            'Después: resumir con palabras propias, comparar con un relato local y debatir con reglas de respeto.',
            'Cerrar con una reflexión escrita: ¿qué aprendí sobre cómo convivimos con ideas distintas?'
          ]
        }
      ],
      clave: [
        'Partir de los intereses de los estudiantes no reemplaza los objetivos de aprendizaje: los sirve.',
        'Los relatos locales y los productos globales pueden convivir en la misma clase.',
        'Hay que vincular cada actividad con competencias concretas del currículo.',
        'La actividad debe cuidar el respeto y evitar copiar letras o textos protegidos.'
      ],
      preguntas: [
        '¿Qué interés de tus estudiantes podrías convertir en un texto para leer?',
        '¿Qué relato de tu región llevarías al aula?',
        '¿Cómo evaluarías que la actividad mejoró la comprensión y no solo la participación?'
      ],
      aula: 'Prueba una sesión corta: lean una reseña breve de un producto cultural que le guste a la clase y, luego, un relato local. Comparen en una tabla: tema, emociones y mensaje.',
      fuentes: [
        { ref: 'Santana López, A. (2010). Cultura juvenil y cultura escolar. Aproximación a una relación compleja: tensiones y desafíos. Foro Educacional, (17), 45-63.', pdf: 'https://dialnet.unirioja.es/descarga/articulo/6429470.pdf' },
        { ref: '[Autor, título y año por completar]. Tesis sobre la integración de saberes locales en la enseñanza de la comprensión lectora en una escuela EIB de Huancané, Puno. Universidad Peruana Cayetano Heredia.', url: 'https://repositorio.upch.edu.pe/handle/20.500.12866/18366', etiqueta: 'Ver en el repositorio' },
        { ref: 'Ministerio de Educación del Perú. Currículo Nacional de la Educación Básica (R. M. N.º 281-2016-MINEDU; consultar la versión vigente).', url: 'https://www.gob.pe/institucion/minedu/campa%C3%B1as/106784-curriculo-nacional-de-la-educacion-basica', etiqueta: 'Ver en gob.pe' },
        { ref: 'Ministerio de Educación del Perú. Orientaciones sobre mediación de la lectura en el marco del plan lector. [Año por completar]', url: 'https://repositorio.minedu.gob.pe/handle/20.500.12799/8906', etiqueta: 'Ver en el repositorio' }
      ]
    },

    {
      id: 5,
      titulo: 'Tradición andina y cultura global: un diálogo posible',
      imagen: 'imagenes/articulo-5.jpg',
      alt: 'Ilustración generada con IA de un paisaje de los Andes peruanos con montañas y terrazas',
      lead: 'Muchas veces se plantea como si hubiera que elegir: o Corea, o los Andes. Este artículo explorará por qué esa elección no es obligatoria y cómo las tradiciones andinas y las culturas globales pueden convivir en la identidad de los jóvenes.',
      secciones: [
        {
          titulo: 'Las dos caras de la globalización',
          parrafos: [
            'Degregori sostiene que la globalización tiene dos caras: por un lado empuja a la uniformización, pero por otro puede fortalecer las identidades locales, porque cuanto más contacto hay con lo diferente, más se intensifica el deseo de reafirmar la identidad propia.',
            'Además, plantea que tradición y modernidad no son polos que se excluyan: algunas tradiciones pueden ser un activo y no un obstáculo para participar en el mundo global.'
          ]
        },
        {
          titulo: 'Lo que muestran los estudios peruanos',
          parrafos: [
            'Vargas y Pérez (2019) encuestaron a 448 estudiantes de 8 a 21 años de cuatro distritos de Puno. Concluyen que el sistema educativo no responde lo suficiente a la cultura quechua y aimara y que, en sus datos, la valoración de la cultura andina baja a medida que los estudiantes avanzan de nivel.',
            'La revisión de Pacco Ccasa (2025) concluye que la educación debe combinar conocimientos globales con saberes locales para que los estudiantes enfrenten un mundo interconectado sin perder su identidad. También señala obstáculos, como la falta de recursos para currículos diversificados.'
          ]
        },
        {
          titulo: 'Lo que dicen los jóvenes fans',
          parrafos: [
            'En el estudio de jóvenes seguidores del K-pop en Lima, ellos expresaron que no cambiarían su cultura peruana y que buscan forjar una identidad propia con lo mejor de cada cultura. El estudio mexicano de Nigra (2026) tampoco halló una sustitución de los marcos culturales de referencia.',
            'Son contextos distintos al de Arequipa, de modo que sirven como hipótesis para conversar, no como conclusiones.'
          ]
        },
        {
          titulo: 'Un diálogo posible',
          parrafos: [
            'La sección «Andes y Corea» de esta revista compara lengua, música, textiles, fiestas y alimentos sin poner una cultura por encima de la otra. La idea es que los estudiantes se hagan la pregunta de fondo: ¿qué me une a cada una?'
          ]
        }
      ],
      clave: [
        'La globalización puede uniformar, pero también puede reforzar lo local.',
        'En los estudios peruanos revisados, la escuela aparece como un lugar clave para valorar la cultura andina.',
        'Reconocerse en una cultura global no implica renunciar a las raíces.',
        'Los datos citados vienen de Puno, Lima y México, no de Arequipa.'
      ],
      preguntas: [
        '¿Qué tradición de tu familia te gustaría que otros conocieran?',
        '¿Qué elemento de una cultura global te gusta y por qué?',
        '¿Qué podría hacer tu colegio para que ambas tengan espacio?'
      ],
      aula: 'Cada estudiante lleva un objeto, una receta, una canción o un relato de su familia y lo relaciona con un producto cultural global que le guste. Con todo, el grupo arma un mural titulado «Lo que nos une».',
      fuentes: [
        { ref: 'Degregori, C. I. Perú: identidad, nación y diversidad cultural. [Año por completar]. Publicado originalmente en interculturalidad.org.', pdf: 'https://red.pucp.edu.pe/wp-content/uploads/biblioteca/110301.pdf' },
        { ref: 'Vargas, D. y Pérez, K. (2019). El sistema educativo peruano y la pérdida de identidad cultural andina en la región Puno. Revista Innova Educación, 1(2).', url: 'https://doi.org/10.35622/j.rie.2019.02.010', pdf: 'https://dialnet.unirioja.es/descarga/articulo/8054572.pdf', etiqueta: 'Ver por DOI' },
        { ref: 'Pacco Ccasa, A. (2025). Interculturalidad e identidad cultural en el Perú contemporáneo: resiliencia y transformación en tiempos de globalización. Revista Científica UISRAEL, 12(3), 167-179.', url: 'https://doi.org/10.35290/rcui.v12n3.2025.1564', pdf: 'https://revista.uisrael.edu.ec/index.php/rcui/article/download/1564/1491/10625', etiqueta: 'Ver por DOI' },
        { ref: '[Autores y año por completar]. Cultural Influence of K-pop in young people of Lima.', url: 'https://journals.continental.edu.pe/index.php/apuntes/article/view/436', etiqueta: 'Ver artículo' }
      ]
    }
  ];

  /* ---------- 2. MODO CLARO / OSCURO Y MENÚ ---------- */
  var raiz = document.documentElement;
  var btnTema = document.getElementById('btn-tema');
  btnTema.setAttribute('aria-pressed', String(raiz.getAttribute('data-theme') === 'dark'));
  btnTema.addEventListener('click', function () {
    var nuevo = raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    raiz.setAttribute('data-theme', nuevo);
    btnTema.setAttribute('aria-pressed', String(nuevo === 'dark'));
    try { localStorage.setItem('k-andes-tema', nuevo); } catch (e) {}
  });

  var btnMenu = document.getElementById('btn-menu');
  var menu = document.getElementById('menu');
  function alternarMenu(abrir) {
    var estado = (typeof abrir === 'boolean') ? abrir : !menu.classList.contains('abierto');
    menu.classList.toggle('abierto', estado);
    btnMenu.setAttribute('aria-expanded', String(estado));
    btnMenu.setAttribute('aria-label', estado ? 'Cerrar menú' : 'Abrir menú');
  }
  btnMenu.addEventListener('click', function () { alternarMenu(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('abierto')) { alternarMenu(false); btnMenu.focus(); }
  });

  /* ---------- 3. DIBUJAR EL ARTÍCULO ---------- */
  var contenedor = document.getElementById('articulo-raiz');

  // Resalta en amarillo todo lo que diga "[... por completar ...]"
  function marcar(texto) {
    return texto.replace(/\[([^\]]*por completar[^\]]*)\]/gi, '<mark class="pendiente">[$1]</mark>');
  }

  function lista(items, ordenada) {
    var etiqueta = ordenada ? 'ol' : 'ul';
    return '<' + etiqueta + ' class="art-lista">' +
      items.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
      '</' + etiqueta + '>';
  }

  function pintar(a) {
    var anterior = ARTICULOS[a.id - 2];
    var siguiente = ARTICULOS[a.id];
    var html = '';

    // Encabezado con título (único h1), introducción e imagen
    html += '<section class="art-hero"><div class="contenedor art-hero__grid"><div>' +
      '<nav class="migas" aria-label="Ruta de navegación"><ol>' +
        '<li><a href="index.html">Inicio</a></li>' +
        '<li><a href="index.html#investigacion">Investigación</a></li>' +
        '<li aria-current="page">Artículo ' + a.id + '</li></ol></nav>' +
      '<p class="etiqueta etiqueta--proto">Texto de prototipo · Artículo ' + a.id + ' de ' + ARTICULOS.length + '</p>' +
      '<h1>' + a.titulo + '</h1>' +
      '<p class="art-lead">' + a.lead + '</p></div>' +
      '<figure class="art-hero__img"><img src="' + a.imagen + '" width="800" height="600" alt="' + a.alt + '"></figure>' +
      '</div></section>' +
      '<div class="franja-andina franja-andina--rombos" aria-hidden="true"></div>';

    // Cuerpo: aviso, secciones, ideas clave, preguntas y propuesta de aula
    html += '<section class="seccion"><div class="contenedor contenedor--estrecho art-cuerpo">' +
      '<p class="art-aviso reveal">Este texto es un resumen de prototipo elaborado a partir de las fuentes que aparecen al final. No reemplaza su lectura completa y debe verificarse antes de publicarse.</p>';

    a.secciones.forEach(function (s) {
      html += '<div class="reveal"><h2>' + s.titulo + '</h2>';
      (s.parrafos || []).forEach(function (p) { html += '<p>' + p + '</p>'; });
      if (s.lista) { html += lista(s.lista, s.ordenada); }
      html += '</div>';
    });

    html += '<aside class="art-caja reveal"><h2>Ideas clave</h2>' + lista(a.clave) + '</aside>' +
      '<aside class="art-caja reveal"><h2>Preguntas para conversar</h2>' + lista(a.preguntas, true) + '</aside>' +
      '<aside class="art-caja art-caja--aula reveal"><h2>Para llevar al aula</h2><p>' + a.aula + '</p></aside>' +
      '</div></section>';

    // Fuentes: botón a la fuente y, si existe, al PDF
    html += '<section class="seccion seccion--alterna" aria-labelledby="titulo-fuentes"><div class="contenedor contenedor--estrecho">' +
      '<header class="seccion__cabecera reveal"><p class="eyebrow">Para profundizar</p>' +
      '<h2 id="titulo-fuentes">Fuentes de este artículo</h2>' +
      '<p>Los enlaces llevan a las páginas originales, en una pestaña nueva. K-Andes no aloja estos documentos: cada uno pertenece a su autor y a su revista o repositorio.</p></header>' +
      '<ul class="fuentes-lista">';

    a.fuentes.forEach(function (f) {
      html += '<li class="fuente-card reveal"><p>' + marcar(f.ref) + '</p><div class="fuente-card__botones">';
      if (f.url) {
        html += '<a class="btn btn--chico btn--primario" href="' + f.url + '" target="_blank" rel="noopener">' +
          (f.etiqueta || 'Ver la fuente') + '<span class="sr-only"> (se abre en una pestaña nueva)</span></a>';
      }
      if (f.pdf) {
        html += '<a class="btn btn--chico btn--borde" href="' + f.pdf + '" target="_blank" rel="noopener">' +
          'Abrir PDF<span class="sr-only"> (se abre en una pestaña nueva)</span></a>';
      }
      html += '</div></li>';
    });

    html += '</ul>';

    // Anterior / siguiente (si falta uno, se deja un espacio vacío para mantener la cuadrícula)
    html += '<nav class="art-nav" aria-label="Otros artículos">' +
      (anterior ? '<a href="articulo.html?id=' + anterior.id + '"><small>← Artículo anterior</small>' + anterior.titulo + '</a>' : '<span></span>') +
      (siguiente ? '<a href="articulo.html?id=' + siguiente.id + '"><small>Artículo siguiente →</small>' + siguiente.titulo + '</a>' : '<span></span>') +
      '</nav></div></section>';

    contenedor.innerHTML = html;
    document.title = a.titulo + ' · K-Andes (prototipo)';
  }

  // Lee el número de la dirección: articulo.html?id=3
  var id = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  var articulo = ARTICULOS.filter(function (x) { return x.id === id; })[0];

  if (articulo) {
    pintar(articulo);
  } else {
    contenedor.innerHTML = '<div class="contenedor contenedor--estrecho seccion" style="padding-top:8rem">' +
      '<h1>No encontramos ese artículo</h1>' +
      '<p>Revisa la dirección o vuelve a la lista de artículos.</p>' +
      '<p><a class="btn btn--primario" href="index.html#investigacion">Volver a Investigación</a></p></div>';
    document.title = 'Artículo no encontrado · K-Andes';
  }

  /* ---------- 4. ANIMACIÓN AL HACER SCROLL ----------
     Se activa después de dibujar la página, para que vea los elementos .reveal */
  var elementos = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) { entrada.target.classList.add('visible'); obs.unobserve(entrada.target); }
      });
    }, { threshold: 0.12 });
    elementos.forEach(function (el) { observador.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add('visible'); });
  }
})();