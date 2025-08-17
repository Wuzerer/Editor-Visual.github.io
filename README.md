# Página de Descarga - Ren'Py Visual Editor

Esta es una página web moderna y atractiva para promocionar y distribuir tu editor visual de Ren'Py. El diseño está inspirado en el estilo de Habbo.es con efectos futuristas y una interfaz profesional.

## Características de la Página

### 🎨 Diseño Visual
- **Estilo Habbo.es**: Colores vibrantes, efectos de neón y diseño futurista
- **Animaciones**: Efectos de estrellas animadas, parallax y transiciones suaves
- **Responsive**: Se adapta perfectamente a dispositivos móviles y tablets
- **Efectos interactivos**: Hover effects, animaciones de scroll y feedback visual

### 📱 Secciones Principales

1. **Hero Section**: Presentación principal con título llamativo y preview del editor
2. **Características**: Grid de 6 características principales del editor
3. **Galería**: Capturas de pantalla del editor con modal interactivo
4. **Descargas**: Dos opciones de descarga (Integrable y Standalone)
5. **Roadmap**: Timeline de futuras características
6. **Soporte**: Enlaces a Discord, GitHub y documentación

### 🚀 Funcionalidades JavaScript

- **Navegación suave**: Scroll automático a secciones
- **Animaciones de aparición**: Elementos aparecen al hacer scroll
- **Efectos de hover**: Interactividad en tarjetas y botones
- **Galería interactiva**: Modal para ver imágenes en tamaño completo
- **Mensajes de descarga**: Feedback visual al hacer clic en descargas
- **Header dinámico**: Se oculta/muestra según el scroll

## Estructura de Archivos

```
download_page/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## Personalización

### Colores Principales
Los colores se definen en variables CSS en `styles.css`:

```css
:root {
    --primary-color: #00d4ff;    /* Azul neón principal */
    --secondary-color: #ff6b35;  /* Naranja */
    --accent-color: #ffd700;     /* Dorado */
    --dark-bg: #0a0a0a;          /* Fondo oscuro */
    --text-primary: #ffffff;     /* Texto principal */
    --text-secondary: #b0b0b0;   /* Texto secundario */
}
```

### Modificar Contenido

#### Información del Editor
Edita el archivo `index.html` para cambiar:
- Título y descripción del editor
- Características listadas
- Información de descargas
- Roadmap y fechas
- Enlaces de soporte

#### Imágenes y Assets
- Reemplaza los iconos de Font Awesome con tus propias imágenes
- Modifica el preview del editor en la sección hero
- Añade capturas de pantalla reales del editor en la galería

#### Configurar la Galería
Para añadir tus propias imágenes a la galería:

1. **Reemplaza los placeholders** en `script.js`:
```javascript
const imageUrls = [
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
    'path/to/your/image3.jpg',
    'path/to/your/image4.jpg',
    'path/to/your/image5.jpg',
    'path/to/your/image6.jpg'
];
```

2. **Actualiza las descripciones** en `index.html` para que coincidan con tus capturas de pantalla

3. **Opcional**: Añade más imágenes modificando el HTML y JavaScript correspondiente

### Enlaces de Descarga
Para hacer funcionales los botones de descarga:

1. **Reemplaza los enlaces `#`** en los botones de descarga con URLs reales:
```html
<a href="URL_DE_TU_ARCHIVO.zip" class="btn btn-download">
    <i class="fas fa-download"></i>
    Descargar Integrable
</a>
```

2. **O configura descargas directas** modificando el JavaScript en `script.js`

## Despliegue

### Opción 1: GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Activa GitHub Pages en la configuración del repositorio
3. La página estará disponible en `https://tuusuario.github.io/turepositorio`

### Opción 2: Servidor Web
1. Sube los archivos a tu servidor web
2. Asegúrate de que el servidor sirva archivos estáticos
3. La página estará disponible en tu dominio

### Opción 3: Netlify/Vercel
1. Conecta tu repositorio a Netlify o Vercel
2. Configura el directorio raíz como `download_page`
3. Despliega automáticamente

## Optimización

### Rendimiento
- Las imágenes están optimizadas con CSS
- El JavaScript es ligero y eficiente
- Los estilos están minificados conceptualmente

### SEO
- Meta tags incluidos
- Estructura semántica HTML5
- Títulos y descripciones optimizados

### Accesibilidad
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para iconos

## Personalización Avanzada

### Añadir Nuevas Secciones
1. Copia la estructura de una sección existente
2. Modifica el contenido y estilos
3. Añade la navegación correspondiente

### Modificar Animaciones
Las animaciones están en `styles.css`:
- `@keyframes stars` para las estrellas
- Transiciones en elementos interactivos
- Efectos de hover personalizables

### Integrar Analytics
Añade Google Analytics o similar en el `<head>` del HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

## Soporte

Si necesitas ayuda para personalizar la página:
1. Revisa los comentarios en el código
2. Modifica las variables CSS para cambios de color
3. Edita el HTML para cambios de contenido
4. Ajusta el JavaScript para nuevas funcionalidades

## Licencia

Esta página está diseñada para ser utilizada libremente para promocionar tu editor de Ren'Py. Puedes modificar y distribuir según tus necesidades.
