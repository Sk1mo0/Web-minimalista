# Minimalismo — Landing Page

## Nombre del proyecto
**Minimalismo: Menos es más** — Landing Page interpretativa sobre el movimiento artístico Minimalista.

## Integrantes del equipo
- Perez Granados Adrian Emilio
- Avilez Martinez Angel Joshua
- Saavedra Herrera Efrain

## Movimiento artístico seleccionado
**Minimalismo** (Nueva York, década de 1960).

## Descripción del proyecto
Landing page de una sola página (`index.html`) que presenta el Minimalismo no solo como contenido informativo, sino como una interpretación visual del propio movimiento: espacios en blanco generosos, paleta reducida a blanco / negro / gris con un único acento en rojo (el rojo del plexiglás usado por Donald Judd), tipografía como elemento protagonista, cuadrículas estrictas y ausencia total de ornamento.

La página incluye:
1. Nombre del movimiento y frase representativa (*"Menos es más"*, Ludwig Mies van der Rohe).
2. Introducción histórica (origen, contexto, importancia).
3. Seis características principales del movimiento.
4. Tres exponentes principales — **Donald Judd**, **Agnes Martin** y **Dan Flavin** — cada uno con retrato, biografía, aportación al movimiento y obra representativa.
5. Treinta obras representativas (10 por artista) con nombre, autor, año y descripción, filtrables por artista.
6. Línea del tiempo con los hitos del movimiento, desde sus antecedentes (Constructivismo, De Stijl, Bauhaus) hasta la actualidad.
7. Sección de influencia actual en diseño, arquitectura, moda, publicidad, cine y diseño web.

**Nota sobre las imágenes:** las ilustraciones de `img/` son interpretaciones gráficas propias (SVG) que reconstruyen la composición, paleta y proporción real de cada obra investigada — no son fotografías, ya que la mayoría de las obras aquí presentadas siguen protegidas por derechos de autor. Si tu profesor exige fotografías reales, en la sección "Fuentes consultadas" se listan las páginas de museos (Guggenheim, Whitney, Chinati Foundation, Tate) donde se pueden consultar y descargar bajo los términos de cada institución.

## Tecnologías utilizadas
- HTML5 semántico
- CSS3 (Custom Properties, CSS Grid, Flexbox, `clamp()` para tipografía y espaciados fluidos, media queries)
- JavaScript (Vanilla JS / ES6): menú responsive, `IntersectionObserver` para animaciones de entrada, filtro dinámico de la galería
- Google Fonts (Archivo, Archivo Narrow)

## Estructura del proyecto
```
/proyecto
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/            (33 ilustraciones SVG: 3 retratos + 30 obras)
└── README.md
```

## Cómo verlo localmente
No requiere instalación ni build. Basta con abrir `index.html` en cualquier navegador, o servirlo con un servidor estático simple:
```bash
npx serve .
# o
python3 -m http.server 8080
```

## Cómo publicarlo (para obtener la URL que pide la actividad)
Cualquiera de estas opciones es válida y gratuita:
- **GitHub Pages**: subir la carpeta a un repositorio de GitHub y activar Pages en *Settings → Pages*.
- **Netlify / Vercel**: arrastrar la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop) para un despliegue instantáneo.

## URL de la página publicada
> _Pendiente — agregar aquí la URL una vez publicado el proyecto._

## Fuentes consultadas
- [Minimalism Movement Overview — TheArtStory](https://www.theartstory.org/movement/minimalism/)
- [Minimalismo — Historia Arte (HA!)](https://historia-arte.com/movimientos/minimalismo)
- [Donald Judd — TheArtStory](https://www.theartstory.org/artist/judd-donald/)
- [Agnes Martin — TheArtStory](https://www.theartstory.org/artist/martin-agnes/)
- [Dan Flavin — TheArtStory](https://www.theartstory.org/artist/flavin-dan/)
- [List of light sculptures by Dan Flavin — Wikipedia](https://en.wikipedia.org/wiki/List_of_light_sculptures_by_Dan_Flavin)
- [Donald Judd - 10 Iconic Artworks — Rethinking The Future](https://www.re-thinkingthefuture.com/architectural-community/a5289-donald-judd-10-iconic-artworks/)
- [8 Captivating Works of Art by Agnes Martin — TheCollector](https://www.thecollector.com/captivating-artworks-by-agnes-martin-painter/)
