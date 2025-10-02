# Astro Portfolio Project Instructions

These instructions are for a personal portfolio website built with Astro, TypeScript, and modern web technologies. Follow these guidelines to ensure consistency, performance, and maintainability across the codebase.

## Core Stack
- Use Astro for static site generation with TypeScript support.
- Use Astro components (.astro files) for UI components.
- Use TypeScript for type safety and better development experience.
- Focus on performance, SEO, and accessibility.

## Project Structure
- Components go in `src/components/` directory.
- Page layouts go in `src/layouts/` directory.
- Pages go in `src/pages/` directory.
- Static assets go in `src/assets/` directory.
- Data and type definitions go in `src/data/` directory.
- Public assets go in `public/` directory.
- Unit tests go in `**/*.spec.ts` files alongside source code.
- E2E tests go in `e2e/` directory at project root.

## Naming Conventions
- Use kebab-case for files and directories.
- Use camelCase for functions and variables.
- Use UPPER_SNAKE_CASE for constants.

## File Organization
- Create separate directory for each component.
- Group related files in `domain/`, `hooks/`, `types/`, `utils/` subdirectories.
- Place complex component children in nested `components/` subdirectories.

## Architecture Patterns
- Use component-driven development with Astro components.
- Separate data logic into the `src/data/` directory.
- Use TypeScript interfaces and types for data modeling.
- Implement proper SEO with meta tags and structured data.
- Optimize for Core Web Vitals and performance metrics.

## Astro Best Practices
- Use static generation for optimal performance.
- Minimize client-side JavaScript unless necessary.
- Utilize Astro's component islands for interactive elements.
- Implement proper image optimization with Astro's image service.
- Use content collections for structured content when appropriate.

## Error Handling
- Implement proper error boundaries in Astro components.
- Use try-catch blocks for data fetching operations.
- Provide meaningful error messages and fallback content.
- Log errors appropriately for debugging purposes.

## Testing Strategy & Workflow

### Test-Driven Development Workflow
When implementing new features or modifications, **ALWAYS** follow this testing workflow:

1. **Analyze Requirements**: Understand the feature's user journey and business logic.
2. **Create E2E Tests First**: Write end-to-end tests that describe the complete user workflow.
3. **Write Unit Tests**: Create unit tests for individual components and functions.
4. **Implement Code**: Write the minimum code to make tests pass.
5. **Refactor**: Improve code while keeping tests green.
6. **Update Tests**: Modify existing tests when requirements change.

### Mandatory Testing Requirements
- **Every new feature MUST have E2E tests** covering the main user journey.
- **Every business logic function MUST have unit tests** with edge cases.
- **Every API endpoint MUST have integration tests** for all HTTP methods.
- **Every component MUST have unit tests** for props and user interactions.
- **Critical paths MUST maintain 80%+ code coverage**.

### Test Types and Tools
- Use **Vitest** for unit and integration tests (`**/*.spec.ts`).
- Use **Playwright** for end-to-end tests (`e2e/**`).
- Use **@astro/testing** for Astro component testing.
- Focus on accessibility testing with tools like axe-core.

### E2E Test Coverage Requirements
For every feature, create E2E tests covering:
- **Happy path**: Complete user navigation and interaction flows.
- **Responsive behavior**: Mobile and desktop viewports.
- **Performance metrics**: Core Web Vitals and load times.
- **Accessibility**: Keyboard navigation and screen reader compatibility.
- **Cross-browser compatibility**: Chrome, Firefox, Safari.

### Test Maintenance
- **Run tests before every commit** using pre-commit hooks.
- **Update tests immediately** when requirements change.
- **Review test failures** before assuming code is correct.
- **Refactor tests** when they become brittle or hard to maintain.
- **Remove obsolete tests** when features are deprecated.

## Critical Safety Rule
- Never make assumptions about data structure or content requirements.
- Always validate and sanitize data inputs.
- Ensure proper accessibility attributes and semantic HTML.
- Test across different devices and screen sizes.
- **Never skip tests** - they are essential for maintaining quality.

## Development Process
1. **Feature Planning**: Understand portfolio requirements and user experience goals.
2. **Design Implementation**: Create responsive and accessible components.
3. **Test Implementation**: Create both E2E and unit tests for functionality.
4. **Performance Optimization**: Ensure optimal loading times and Core Web Vitals.
5. **Accessibility Validation**: Test with screen readers and keyboard navigation.
6. **Cross-browser Testing**: Verify compatibility across major browsers.

## Specific Instructions
- For component development, follow instructions in [components.instructions.md](instructions/components.instructions.md).
- For data management, follow instructions in [data.instructions.md](instructions/data.instructions.md).
- For unit testing code, follow instructions in [tests.instructions.md](instructions/tests.instructions.md).
- For E2E testing code, follow instructions in [e2e.instructions.md](instructions/e2e.instructions.md).