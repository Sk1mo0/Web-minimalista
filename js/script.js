/* ==========================================================================
   MINIMALISMO — Landing Page
   script.js: menú responsive, revelado sutil al hacer scroll y filtro
   interactivo de la galería de obras.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------------------
     1. Menú responsive (hamburguesa en tablet / celular)
  --------------------------------------------------------------- */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('navMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var abierto = nav.classList.toggle('abierto');
      toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar el menú al elegir una sección (útil en móvil)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      });
    });

    // Cerrar el menú si la ventana vuelve a tamaño de escritorio
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        nav.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------------------------------------------------------
     2. Revelado sutil al hacer scroll (tarjetas de obras)
        Respeta prefers-reduced-motion y degrada con elegancia si
        IntersectionObserver no está disponible.
  --------------------------------------------------------------- */
  var obras = document.querySelectorAll('.obra');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '150px 0px 150px 0px' });

    obras.forEach(function (obra) { observer.observe(obra); });

    // Salvaguarda: si por cualquier motivo el observer no revela alguna
    // tarjeta (saltos de ancla, herramientas de captura, navegadores
    // atípicos), se garantiza que el contenido sea visible igualmente.
    window.setTimeout(function () {
      obras.forEach(function (obra) { obra.classList.add('visible'); });
    }, 1500);
  } else {
    obras.forEach(function (obra) { obra.classList.add('visible'); });
  }

  /* ---------------------------------------------------------------
     3. Filtro de la galería "Obras representativas"
  --------------------------------------------------------------- */
  var filtros = document.querySelectorAll('.filtro');
  var grid = document.getElementById('gridObras');

  filtros.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var artista = boton.getAttribute('data-filter');

      filtros.forEach(function (b) {
        b.classList.remove('activo');
        b.setAttribute('aria-selected', 'false');
      });
      boton.classList.add('activo');
      boton.setAttribute('aria-selected', 'true');

      grid.querySelectorAll('.obra').forEach(function (obra) {
        var coincide = artista === 'todas' || obra.getAttribute('data-artist') === artista;
        obra.classList.toggle('oculto', !coincide);
        if (coincide) {
          // Vuelve a activar la animación de entrada al filtrar
          obra.classList.add('visible');
        }
      });
    });
  });

});
