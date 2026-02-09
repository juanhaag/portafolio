# Portafolio Personal

Sitio web personal construido con React, TypeScript y Tailwind CSS. Enfoque en rendimiento, animaciones fluidas y diseño responsive.

## Stack Técnico

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Build**: Vite
- **Iconos**: Lucide React

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx           # Navegación con scroll effect
│   ├── sections/
│   │   ├── Hero.tsx             # Landing con typewriter animation
│   │   ├── About.tsx            # Terminal-style sobre mí
│   │   ├── Projects.tsx         # Grid de proyectos + galería
│   │   ├── TechStack.tsx        # Tags categorizadas por área
│   │   └── Footer.tsx           # Links sociales
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── ProjectCard.tsx
│       ├── ImageGallery.tsx     # Lightbox para mockups
│       └── TypewriterText.tsx   # Efecto de escritura
├── types/
│   └── index.ts                 # TypeScript interfaces
└── lib/
    └── utils.ts                 # Helpers (cn, etc)
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

El output se genera en `/dist`

## Preview Build

```bash
npm run preview
```

## Features

### Galería de Proyectos
- Modal fullscreen con navegación por teclado (←/→/ESC)
- Thumbnails para navegación rápida
- Zoom con click
- Loading states y transiciones suaves

### Diseño
- Tema "Industrial-Futurista"
- Fondo: `#0a0a0a`
- Acentos: Verde esmeralda (`#10b981`) y Cian (`#06b6d4`)
- Tipografía: Inter + JetBrains Mono

### Optimizaciones
- Code splitting automático
- Lazy loading de imágenes
- Animaciones con `will-change` optimizado
- Bundle < 320KB

## Configuración Tailwind

El tema custom está en `tailwind.config.js`:

```js
colors: {
  'industrial-900': '#0a0a0a',
  'industrial-800': '#1a1a1a',
  'accent-emerald': '#10b981',
  'accent-cyan': '#06b6d4',
  // ...
}
```

## Agregar Proyectos

Editar `/src/components/sections/Projects.tsx`:

```typescript
{
  id: 'proyecto-id',
  title: 'Título del Proyecto',
  description: 'Descripción breve',
  icon: IconComponent, // de lucide-react
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  isSecurityAudited: true,
  githubUrl: 'https://github.com/...',
  mockups: [
    { src: '/demo/proyecto/screen1.png', alt: 'Screenshot 1', caption: 'Vista principal' }
  ]
}
```

Los mockups van en `/public/demo/nombre-proyecto/`

## Personalización

### CV
Reemplazar `/public/cv-juanhaag.pdf` con tu CV

### Links Sociales
Editar en `/src/components/sections/Footer.tsx`:

```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/tu-usuario', label: 'GitHub' },
  // ...
]
```

### Colores
Modificar `tailwind.config.js` y actualizar las clases en los componentes

## Deployment

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Configurar base en vite.config.ts: base: '/repo-name/'
```

## Licencia

MIT

## Contacto

- GitHub: [@juanhaag](https://github.com/juanhaag)
- LinkedIn: [Juan Martín Haag](https://www.linkedin.com/in/juan-martin-haag/)
- Email: contactojuanhaag@gmail.com
