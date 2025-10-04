# 🚀 Portfolio Personal - Astro

Un portfolio personal moderno construido con Astro, TypeScript y las mejores prácticas de desarrollo.

## ✨ Características

- ⚡ **Astro** - Framework moderno para sitios web rápidos
- 🎯 **TypeScript** - Tipado estático para mayor robustez
- 🎨 **Biome** - Linting y formateo ultrarrápido
- 📱 **Responsive** - Diseño adaptativo para todos los dispositivos
- 🎭 **Componentes** - Arquitectura modular y reutilizable
- 🔍 **SEO Optimizado** - Meta tags y structured data
- 🚀 **Performance** - Core Web Vitals optimizado

## 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo
pnpm build        # Construye el proyecto para producción
pnpm preview      # Vista previa del build de producción

# Calidad de código
pnpm lint         # Ejecuta el linter
pnpm lint:fix     # Corrige automáticamente los problemas de linting
pnpm format       # Formatea el código
pnpm check        # Verifica linting y formateo
pnpm check:fix    # Corrige automáticamente todos los problemas
```

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar desarrollo:**
   ```bash
   pnpm dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:4321
   ```

## 📚 Documentación

### VS Code Configuración

- [`docs/vscode-config.example.json`](docs/vscode-config.example.json) - Configuración completa de VS Code
- [`.vscode/`](.vscode/) - Configuración del workspace

### Variables de Entorno

- [`docs/.env.example`](docs/.env.example) - Ejemplo de variables de entorno

### Documentación Adicional

## 🏗️ Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── astro.svg
│   ├── components/
│   │   └── Welcome.astro
│   ├── data/
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .vscode/
│   ├── settings.json
│   └── extensions.json
└── docs/
    ├── README.md
    └── vscode-config.example.json
```

## 🛠️ Tecnologías Utilizadas

- **Astro 5.14.1** - Framework para sitios web estáticos
- **TypeScript** - Tipado estático
- **Biome** - Linter y formateador ultrarrápido
- **VS Code** - Editor con configuración optimizada

## 📖 Aprende Más

- [Documentación de Astro](https://docs.astro.build)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Biome](https://biomejs.dev/)

## 🏗️ Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias                        |
| `pnpm dev`                | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Construye el sitio para producción en `./dist/` |
| `pnpm preview`            | Vista previa del build antes del deploy         |
| `pnpm lint`               | Ejecuta el linter                               |
| `pnpm format`             | Formatea el código                              |

## 🤝 Contribuir

1. Fork del proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## � Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🌟 ¿Te gustó el proyecto?

¡Dale una estrella ⭐ si este proyecto te fue útil!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
