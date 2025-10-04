# 🚀 Portfolio Personal - Astro

Portfolio personal moderno construido con Astro, TypeScript y las mejores prácticas de desarrollo.

## ✨ Características

- ⚡ **Astro 5.14** - Framework moderno para sitios web ultrarrápidos
- 🎯 **TypeScript** - Tipado estático para código más robusto
- 🎨 **Biome** - Linting y formateo ultrarrápido (reemplaza ESLint + Prettier)
- 📱 **Responsive** - Diseño adaptativo para todos los dispositivos
- 🎭 **Componentes Modulares** - Arquitectura reutilizable y mantenible
- 🔍 **SEO Optimizado** - Meta tags y structured data
- 🚀 **Performance** - Core Web Vitals optimizado

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Abrir en el navegador
# http://localhost:4321
```

## 📦 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye para producción en `./dist/` |
| `pnpm preview` | Vista previa del build de producción |
| `pnpm lint` | Ejecuta el linter |
| `pnpm lint:fix` | Corrige problemas de linting automáticamente |
| `pnpm format` | Formatea el código |
| `pnpm check` | Verifica linting y formateo |
| `pnpm check:fix` | Corrige todos los problemas automáticamente |

## 🏗️ Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── assets/         # Recursos (imágenes, fonts, etc)
│   │   └── astro.svg
│   ├── components/     # Componentes reutilizables
│   │   └── Welcome.astro
│   ├── data/          # Datos del portfolio
│   │   ├── personal.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── skills.ts
│   │   └── types.ts
│   ├── layouts/       # Layouts de página
│   │   └── Layout.astro
│   └── pages/         # Páginas del sitio
│       └── index.astro
├── .vscode/           # Configuración VS Code
│   ├── settings.json
│   ├── extensions.json
│   ├── tasks.json
│   ├── launch.json
│   └── astro.code-snippets
└── docs/              # Documentación adicional
    ├── README.md
    ├── MCPs-GUIDE.md
    └── claude_desktop_config.example.json
```

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework para sitios web estáticos
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos
- **[Biome](https://biomejs.dev/)** - Linter y formateador ultrarrápido
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes eficiente

## 📚 Documentación

### Configuración de VS Code
- [`.vscode/settings.json`](.vscode/settings.json) - Configuración completa del editor
- [`.vscode/extensions.json`](.vscode/extensions.json) - Extensiones recomendadas
- [`.vscode/tasks.json`](.vscode/tasks.json) - Tareas automatizadas
- [`.vscode/astro.code-snippets`](.vscode/astro.code-snippets) - Snippets personalizados

### Claude Desktop (MCPs)
- [`docs/MCPs-GUIDE.md`](docs/MCPs-GUIDE.md) - Guía completa de Model Context Protocols
- [`docs/claude_desktop_config.example.json`](docs/claude_desktop_config.example.json) - Configuración de ejemplo

## 🎨 VS Code Snippets

Este proyecto incluye snippets personalizados para Astro:

- `astro-component` - Componente básico con props
- `astro-layout` - Layout completo
- `astro-page` - Página básica
- `astro-if` - Renderizado condicional
- `astro-map` - Renderizado de listas

## �� Contribuir

Las contribuciones son bienvenidas:

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📖 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Biome](https://biomejs.dev/)
- [Discord de Astro](https://astro.build/chat)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**¿Te resultó útil?** ¡Dale una ⭐ al proyecto!
