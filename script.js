/* =========================================================
   K-Andes · script.js
   Todo el código está dentro de una función que se ejecuta sola
   (IIFE) para no ensuciar el espacio global.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. MODO CLARO / OSCURO ----------
     El tema inicial lo pone el mini script del <head>.
     Aquí solo manejamos el botón y guardamos la elección. */
  var raiz = document.documentElement;
  var btnTema = document.getElementById('btn-tema');

  function aplicarTema(tema) {
    raiz.setAttribute('data-theme', tema);
    btnTema.setAttribute('aria-pressed', String(tema === 'dark'));
    try { localStorage.setItem('k-andes-tema', tema); } catch (e) { /* si no se puede guardar, no pasa nada */ }
  }
  // Sincroniza el estado del botón con el tema ya aplicado
  btnTema.setAttribute('aria-pressed', String(raiz.getAttribute('data-theme') === 'dark'));
  btnTema.addEventListener('click', function () {
    aplicarTema(raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------- 2. MENÚ HAMBURGUESA ---------- */
  var btnMenu = document.getElementById('btn-menu');
  var menu = document.getElementById('menu');

  function alternarMenu(abrir) {
    var estado = (typeof abrir === 'boolean') ? abrir : !menu.classList.contains('abierto');
    menu.classList.toggle('abierto', estado);
    btnMenu.setAttribute('aria-expanded', String(estado));
    btnMenu.setAttribute('aria-label', estado ? 'Cerrar menú' : 'Abrir menú');
  }
  btnMenu.addEventListener('click', function () { alternarMenu(); });
  // Al elegir un enlace, el menú se cierra
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) alternarMenu(false); });
  // Escape cierra el menú y devuelve el foco al botón
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('abierto')) { alternarMenu(false); btnMenu.focus(); }
  });
  // Si la pantalla pasa a modo escritorio, se reinicia el menú
  window.matchMedia('(min-width: 1120px)').addEventListener('change', function (e) { if (e.matches) alternarMenu(false); });

  /* ---------- 3. ANIMACIÓN AL HACER SCROLL (IntersectionObserver) ----------
     Cada elemento con clase .reveal recibe la clase .visible al entrar en pantalla. */
  var elementos = document.querySelectorAll('.reveal');

  // Retraso escalonado: los hijos de [data-escalonado] aparecen uno tras otro
  document.querySelectorAll('[data-escalonado]').forEach(function (grupo) {
    Array.prototype.forEach.call(grupo.children, function (hijo, i) {
      hijo.style.setProperty('--retraso', (i * 0.1) + 's');
    });
  });

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          obs.unobserve(entrada.target);     // se anima una sola vez
        }
      });
    }, { threshold: 0.15 });
    elementos.forEach(function (el) { observador.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add('visible'); }); // navegadores antiguos
  }

  /* ---------- 4. ENLACE ACTIVO DEL MENÚ SEGÚN EL SCROLL ---------- */
  var enlacesMenu = document.querySelectorAll('.menu a');
  if ('IntersectionObserver' in window) {
    var obsSecciones = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          enlacesMenu.forEach(function (a) {
            if (a.getAttribute('href') === '#' + entrada.target.id) { a.setAttribute('aria-current', 'true'); }
            else { a.removeAttribute('aria-current'); }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { obsSecciones.observe(s); });
  }

  /* ---------- 5. FILTRO DE RECURSOS ---------- */
  var botonesFiltro = document.querySelectorAll('.filtro');
  var recursos = document.querySelectorAll('.recurso');
  var estadoFiltro = document.getElementById('filtro-estado');

  botonesFiltro.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var categoria = boton.getAttribute('data-filtro');
      var visibles = 0;

      // Marca el botón activo
      botonesFiltro.forEach(function (b) { b.setAttribute('aria-pressed', String(b === boton)); });

      // Muestra u oculta cada tarjeta comparando su data-categoria
      recursos.forEach(function (tarjeta) {
        var mostrar = (categoria === 'todos' || tarjeta.getAttribute('data-categoria') === categoria);
        tarjeta.hidden = !mostrar;
        if (mostrar) { tarjeta.classList.add('visible'); visibles++; }
      });

      // Mensaje para lectores de pantalla y para todos
      estadoFiltro.textContent = 'Mostrando ' + visibles + (visibles === 1 ? ' recurso' : ' recursos');
    });
  });

  /* ---------- 6. MINI QUIZ ---------- */
  // Cada pregunta: texto, opciones, índice de la correcta (empieza en 0) y explicación.
  var preguntas = [
    {
      texto: '¿Qué significa «Hallyu»?',
      opciones: ['Un estilo de tejido andino', 'La «ola coreana»: la expansión de la cultura popular coreana', 'Un género de danza peruana', 'Un idioma originario'],
      correcta: 1,
      explicacion: 'Hallyu es el término con que se nombra la expansión de la cultura popular coreana (música, series, cine) por el mundo.'
    },
    {
      texto: '¿Qué enfoque tiene K-Andes?',
      opciones: ['Es un club de fans de grupos musicales', 'Es una revista educativa que analiza identidad juvenil y escuela', 'Es una tienda de entradas para conciertos', 'Es un portal de noticias de espectáculos'],
      correcta: 1,
      explicacion: 'K-Andes tiene un enfoque educativo: busca entender por qué los jóvenes se identifican con esta cultura y qué puede hacer la escuela con ello.'
    },
    {
      texto: 'Al usar la cultura juvenil en el aula, ¿qué conviene hacer?',
      opciones: ['Prohibirla para evitar distracciones', 'Usarla solo como premio al final de la clase', 'Partir de los intereses de los estudiantes y vincularlos con objetivos de aprendizaje', 'Ponerla sin ningún propósito pedagógico'],
      correcta: 2,
      explicacion: 'Conectar los intereses de los estudiantes con propósitos de aprendizaje claros hace la clase más significativa.'
    }
  ];

  var caja = document.getElementById('quiz-contenido');
  var indice = 0, aciertos = 0, respondida = false;

  // Dibuja la pregunta actual
  function mostrarPregunta() {
    var p = preguntas[indice];
    respondida = false;
    caja.innerHTML =
      '<p class="quiz__progreso">Pregunta ' + (indice + 1) + ' de ' + preguntas.length + '</p>' +
      '<div class="quiz__barra" aria-hidden="true"><span style="width:' + (indice / preguntas.length * 100) + '%"></span></div>' +
      '<h3 class="quiz__pregunta" id="quiz-pregunta">' + p.texto + '</h3>' +
      '<div class="quiz__opciones" role="group" aria-labelledby="quiz-pregunta">' +
        p.opciones.map(function (o, i) { return '<button type="button" class="quiz__opcion" data-i="' + i + '">' + o + '</button>'; }).join('') +
      '</div>' +
      '<div class="quiz__feedback" role="status" aria-live="polite"></div>' +
      '<button type="button" class="btn btn--primario quiz__siguiente" hidden>' +
        (indice < preguntas.length - 1 ? 'Siguiente pregunta' : 'Ver resultado') + '</button>';
  }

  // Revisa la respuesta elegida y da retroalimentación inmediata
  function responder(boton) {
    if (respondida) { return; }
    respondida = true;
    var p = preguntas[indice];
    var elegida = Number(boton.getAttribute('data-i'));
    var botones = caja.querySelectorAll('.quiz__opcion');
    var feedback = caja.querySelector('.quiz__feedback');

    botones.forEach(function (b) { b.setAttribute('aria-disabled', 'true'); });
    botones[p.correcta].classList.add('correcta');

    if (elegida === p.correcta) {
      aciertos++;
      feedback.textContent = '¡Correcto! ' + p.explicacion;
    } else {
      boton.classList.add('incorrecta');
      feedback.textContent = 'Casi. ' + p.explicacion;
    }
    caja.querySelector('.quiz__siguiente').hidden = false;
  }

  // Pantalla final con el puntaje
  function mostrarResultado() {
    var mensaje = aciertos === preguntas.length
      ? '¡Excelente! Ya tienes las ideas base de la revista.'
      : aciertos >= 2 ? '¡Muy bien! Repasa las secciones de Investigación y Aula y cultura para afianzar lo que falta.'
      : 'Buen comienzo. Lee de nuevo las secciones de Investigación y Aula y cultura e inténtalo otra vez.';
    caja.innerHTML =
      '<h3 class="quiz__pregunta">Tu resultado</h3>' +
      '<p class="quiz__puntaje">' + aciertos + ' de ' + preguntas.length + '</p>' +
      '<p role="status">' + mensaje + '</p>' +
      '<button type="button" class="btn btn--primario quiz__reiniciar">Volver a intentar</button>';
  }

  // Un solo "oyente" para todos los botones del quiz (delegación de eventos)
  caja.addEventListener('click', function (e) {
    var opcion = e.target.closest('.quiz__opcion');
    if (opcion) { responder(opcion); return; }
    if (e.target.closest('.quiz__siguiente')) {
      indice++;
      if (indice < preguntas.length) { mostrarPregunta(); } else { mostrarResultado(); }
      return;
    }
    if (e.target.closest('.quiz__reiniciar')) { indice = 0; aciertos = 0; mostrarPregunta(); }
  });
  mostrarPregunta();

  /* ---------- 7. VALIDACIÓN VISUAL DEL FORMULARIO ----------
     Solo muestra mensajes en pantalla. NO envía ni guarda nada. */
  var formulario = document.getElementById('form-contacto');
  var estadoForm = document.getElementById('form-estado');

  // Devuelve un mensaje de error, o '' si el campo está bien
  function validar(campo) {
    var valor = campo.value.trim();
    // Evita que escriban datos personales (correo o teléfono) en campos de texto
    var pareceDatoPersonal = /@|\d{6,}/.test(valor);

    switch (campo.id) {
      case 'apodo':
        if (pareceDatoPersonal) { return 'Por favor, no escribas correos ni números de teléfono.'; }
        if (valor.length === 1) { return 'Si lo usas, el seudónimo debe tener al menos 2 caracteres.'; }
        return '';
      case 'rol':
        return valor ? '' : 'Elige cómo participas en la revista.';
      case 'mensaje':
        if (valor.length < 10) { return 'Escribe al menos 10 caracteres.'; }
        if (pareceDatoPersonal) { return 'Por favor, no escribas correos ni números de teléfono.'; }
        return '';
      case 'acuerdo':
        return campo.checked ? '' : 'Marca esta casilla para continuar.';
      default:
        return '';
    }
  }

  // Pinta u oculta el error de un campo
  function mostrarError(campo, mensaje) {
    var zonaError = document.getElementById(campo.id + '-error');
    zonaError.textContent = mensaje;
    var opcional = (campo.id === 'apodo' && campo.value.trim() === '');
    campo.setAttribute('aria-invalid', mensaje ? 'true' : (opcional ? 'false' : 'false'));
    if (opcional && !mensaje) { campo.removeAttribute('aria-invalid'); }
  }

  // Revisa cada campo al salir de él y mientras se corrige
  var camposRevisables = formulario.querySelectorAll('#apodo, #rol, #mensaje, #acuerdo');
  camposRevisables.forEach(function (campo) {
    campo.addEventListener('blur', function () { mostrarError(campo, validar(campo)); });
    campo.addEventListener('input', function () {
      if (campo.getAttribute('aria-invalid') === 'true') { mostrarError(campo, validar(campo)); }
    });
    campo.addEventListener('change', function () { mostrarError(campo, validar(campo)); });
  });

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();                       // evita cualquier envío
    estadoForm.className = 'form__estado';
    estadoForm.textContent = '';
    var primerError = null;

    camposRevisables.forEach(function (campo) {
      var mensaje = validar(campo);
      mostrarError(campo, mensaje);
      if (mensaje && !primerError) { primerError = campo; }
    });

    if (primerError) {
      primerError.focus();                    // lleva el foco al primer error
      estadoForm.textContent = 'Revisa los campos marcados.';
    } else {
      estadoForm.className = 'form__estado ok';
      estadoForm.textContent = '¡Validación correcta! Recuerda: es una demostración y no se envió ningún dato.';
      formulario.reset();
      camposRevisables.forEach(function (campo) { campo.removeAttribute('aria-invalid'); });
    }
  });

})();