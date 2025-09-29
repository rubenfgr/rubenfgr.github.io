# Astro Components Instructions

Guidelines for developing Astro components in the portfolio project.

## Component Structure
- Use `.astro` file extension for Astro components.
- Place components in `src/components/` directory.
- Use TypeScript for component scripts when logic is needed.
- Export props interface when component accepts props.

## Astro Component Best Practices

### Component Script Section
```astro
---
// Component logic goes here
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---
```

### Component Template
- Use semantic HTML elements.
- Implement proper accessibility attributes.
- Use CSS classes for styling (prepare for Tailwind CSS integration).
- Avoid inline styles unless absolutely necessary.

### Props and TypeScript
- Always define Props interface for components that accept props.
- Use optional properties (`?`) for non-required props.
- Provide default values when appropriate.
- Use proper TypeScript types for complex props.

## Component Categories

### Layout Components
- Place in `src/layouts/` directory.
- Use for page-level structure and common elements.
- Include proper `<head>` sections with meta tags.
- Implement responsive design patterns.

### UI Components
- Place in `src/components/` directory.
- Keep components focused on single responsibility.
- Make components reusable and configurable.
- Include hover states and interactive feedback.

### Content Components
- Use for displaying portfolio content (projects, skills, etc.).
- Integrate with data from `src/data/` directory.
- Implement proper image optimization.
- Include structured data for SEO.

## Styling Guidelines
- Use semantic CSS class names.
- Implement responsive design with mobile-first approach.
- Use CSS custom properties for theming.
- Avoid component-specific global styles.

## Performance Considerations
- Minimize client-side JavaScript.
- Use Astro's component islands for interactive elements.
- Implement proper image lazy loading.
- Optimize component bundle size.

## Accessibility Requirements
- Use proper heading hierarchy (h1, h2, h3, etc.).
- Include alt text for all images.
- Implement keyboard navigation support.
- Use ARIA labels and roles when needed.
- Ensure sufficient color contrast.

## Testing Components
- Write unit tests for component logic.
- Test component rendering with different props.
- Include accessibility testing.
- Test responsive behavior across breakpoints.

## Component Documentation
- Include JSDoc comments for complex components.
- Document props and their expected types.
- Provide usage examples in comments.
- Document any special behaviors or requirements.