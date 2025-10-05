# Portfolio Profesional - Rubén Rosales

Portfolio profesional de desarrollador FullStack construido con Astro, TypeScript y diseño minimalista moderno.

## 🚀 Características

- **Diseño Moderno**: Interfaz minimalista y profesional con animaciones sutiles
- **Tema Claro/Oscuro**: Sistema de temas con persistencia en localStorage
- **Fully Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags, Open Graph y structured data
- **Performance**: Carga rápida y optimizada con Astro
- **Accesibilidad**: Navegación por teclado y etiquetas ARIA

## 🎨 Sistema de Temas

El portfolio incluye un sistema de temas personalizado con:

- **Paleta de colores**: Basada en #F9FAFB, #111827, #6B7280, #3B82F6
- **Tipografía**: Inter y Roboto de Google Fonts
- **Variables CSS**: Sistema completo de design tokens
- **Componentes reutilizables**: Cards, buttons, forms, etc.

### Archivo de tema

El archivo `src/styles/theme.css` contiene:
- Variables CSS para colores, tipografía, espaciado, bordes, sombras
- Estilos base y reset
- Utilidades y componentes base
- Animaciones y transiciones

## 📂 Estructura del Proyecto

```
├── public/
│   ├── favicon.svg
│   └── img/
│       └── profile.jpg
├── src/
│   ├── assets/          # Assets estáticos
│   ├── components/      # Componentes de Astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Services.astro
│   │   └── Contact.astro
│   ├── data/            # Datos del portfolio
│   │   ├── types.ts
│   │   ├── personal.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── services.ts
│   ├── layouts/         # Layouts de página
│   │   └── Layout.astro
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro
│   │   └── projects/
│   │       └── [slug].astro
│   └── styles/          # Estilos globales
│       └── theme.css
└── package.json
```

## 🎯 Secciones del Portfolio

1. **Hero**: Presentación principal con imagen de perfil y enlaces sociales
2. **Sobre mí**: Biografía, información de contacto y estadísticas
3. **Experiencia**: Timeline de experiencia profesional con logros
4. **Proyectos**: Carousel de proyectos destacados con enlaces a páginas de detalle
5. **Habilidades**: Grid categorizado de tecnologías con barras de progreso
6. **Educación**: Formación académica y cursos realizados
7. **Servicios**: Oferta de servicios profesionales
8. **Contacto**: Formulario de contacto e información

## 🛠️ Tecnologías

- **Framework**: Astro 5.14.1
- **Lenguaje**: TypeScript
- **Estilos**: CSS Variables (Custom Properties)
- **Fuentes**: Google Fonts (Inter, Roboto)
- **Icons**: SVG inline

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## 🎨 Personalización

### Actualizar datos personales

Edita los archivos en `src/data/`:

- `personal.ts`: Información personal, contacto y redes sociales
- `experience.ts`: Experiencia laboral
- `projects.ts`: Proyectos realizados
- `skills.ts`: Habilidades técnicas
- `education.ts`: Formación académica y cursos
- `services.ts`: Servicios ofrecidos

### Personalizar tema

El archivo `src/styles/theme.css` contiene todas las variables CSS. Modifica las variables en `:root` para el tema claro y en `[data-theme='dark']` para el tema oscuro.

### Añadir imagen de perfil

Reemplaza el archivo `public/img/profile.jpg` con tu propia imagen.

## 🚀 Despliegue

El portfolio puede desplegarse en cualquier plataforma que soporte sitios estáticos:

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Drag & drop o conexión con Git
- **GitHub Pages**: Configura el workflow de GitHub Actions
- **Cloudflare Pages**: Conexión directa con Git

## 📝 Añadir nuevo proyecto

1. Agrega el proyecto en `src/data/projects.ts`:

```typescript
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  summary: 'Descripción breve',
  slug: 'mi-proyecto',
  longDescription: 'Descripción detallada',
  technologies: ['Tech1', 'Tech2'],
  type: 'web',
  year: 2025,
  featured: true,
  status: 'completed'
}
```

2. La página de detalle se generará automáticamente en `/projects/mi-proyecto`

## 🎯 SEO

El portfolio incluye:
- Meta tags descriptivos
- Open Graph para redes sociales
- Twitter Cards
- Títulos y descripciones optimizados
- Estructura semántica de HTML

## ♿ Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Contraste de colores WCAG AA
- HTML semántico
- Scroll suave y skip links

## 📄 Licencia

Este proyecto es de uso personal. Puedes usarlo como inspiración para tu propio portfolio.

## 👤 Autor

**Rubén Rosales**
- Email: rubenfranciscogr@gmail.com
- LinkedIn: [Rubén Francisco Gazquez Rosales](https://www.linkedin.com/in/rub%C3%A9n-francisco-gazquez-rosales-45b788160)
- GitHub: [@rubenfgr](https://github.com/rubenfgr)

---

Desarrollado con ❤️ usando Astro
