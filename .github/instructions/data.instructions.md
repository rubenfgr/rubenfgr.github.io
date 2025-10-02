# Data Management Instructions

Guidelines for managing data in the Astro portfolio project.

## Data Structure
- Place all data files in `src/data/` directory.
- Use TypeScript files (`.ts`) for data definitions.
- Export data as named exports or default exports.
- Define proper TypeScript interfaces for all data types.

## Data Organization

### Type Definitions
- Keep all TypeScript interfaces in `src/data/types.ts`.
- Use descriptive names for interfaces and types.
- Include optional properties where appropriate.
- Document complex types with JSDoc comments.

### Data Files
- Separate data by domain (personal, education, experience, etc.).
- Use consistent naming conventions.
- Include all necessary fields for portfolio display.
- Validate data structure with TypeScript.

## Data Best Practices

### Personal Information (`personal.ts`)
```typescript
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  socialLinks: SocialLink[];
}
```

### Project Data (`projects.ts`)
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
}
```

### Skills Data (`skills.ts`)
```typescript
export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
}
```

## Data Validation
- Use TypeScript for compile-time validation.
- Implement runtime validation for critical data.
- Provide fallback values for optional fields.
- Log warnings for missing or invalid data.

## Content Management
- Keep content up-to-date and accurate.
- Use proper image paths and optimize images.
- Include SEO-friendly descriptions and metadata.
- Maintain consistent formatting across data files.

## Data Integration
- Import data in Astro components using ES modules.
- Use data transformation functions when needed.
- Implement proper error handling for missing data.
- Cache frequently accessed data when appropriate.

## SEO and Metadata
- Include proper meta descriptions and titles.
- Add structured data (JSON-LD) for better SEO.
- Use descriptive alt text for images.
- Include Open Graph and Twitter Card metadata.

## Data Security
- Never include sensitive information in data files.
- Use environment variables for API keys or secrets.
- Sanitize user-provided content if applicable.
- Follow privacy best practices for personal information.

## Testing Data
- Write tests to validate data structure.
- Test data integration with components.
- Ensure all required fields are present.
- Validate external links and resources.