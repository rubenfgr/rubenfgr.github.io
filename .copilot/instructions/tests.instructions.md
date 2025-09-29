# Unit Testing Instructions

Guidelines for writing unit tests in the Astro portfolio project.

## Testing Framework
- Use **Vitest** as the primary testing framework.
- Use **@astro/testing** for Astro-specific component testing.
- Place test files alongside source files with `.spec.ts` extension.
- Follow the Arrange-Act-Assert (AAA) pattern.

## Test Structure

### Basic Test Setup
```typescript
import { describe, it, expect } from 'vitest';
import { getPersonalInfo } from './personal';

describe('Personal Data', () => {
  it('should return valid personal information', () => {
    // Arrange
    const expectedFields = ['name', 'title', 'email', 'bio'];
    
    // Act
    const personalInfo = getPersonalInfo();
    
    // Assert
    expectedFields.forEach(field => {
      expect(personalInfo).toHaveProperty(field);
    });
  });
});
```

### Component Testing
```typescript
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Card from './Card.astro';

test('Card component renders with props', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {
    props: { title: 'Test Title', description: 'Test Description' }
  });
  
  expect(result).toContain('Test Title');
  expect(result).toContain('Test Description');
});
```

## Testing Categories

### Data Layer Testing
- Test data structure validation.
- Verify required fields are present.
- Test data transformation functions.
- Validate external links and resources.

### Component Testing
- Test component rendering with different props.
- Verify conditional rendering logic.
- Test default prop values.
- Ensure proper HTML structure output.

### Utility Function Testing
- Test pure functions with various inputs.
- Cover edge cases and error conditions.
- Test async functions with proper error handling.
- Verify type conversions and validations.

## Test Coverage Requirements
- Maintain minimum 80% code coverage.
- Focus on critical business logic.
- Test both happy path and error scenarios.
- Include boundary condition testing.

## Test Best Practices

### Naming Conventions
- Use descriptive test names that explain behavior.
- Group related tests using `describe` blocks.
- Use consistent naming patterns across test files.

### Test Data
- Use realistic test data that matches production.
- Create test data factories for complex objects.
- Avoid hardcoded values in assertions when possible.
- Use constants for repeated test values.

### Assertions
- Use specific assertions (toEqual, toContain, etc.).
- Test for both positive and negative cases.
- Verify error messages and error types.
- Check return types and data structures.

### Test Organization
- Keep tests focused on single functionality.
- Use setup and teardown hooks when needed.
- Group related tests logically.
- Maintain consistent test file structure.

## Mocking and Stubbing
- Mock external dependencies and APIs.
- Use test doubles for complex integrations.
- Stub file system operations when needed.
- Mock time-dependent functionality.

## Performance Testing
- Test component rendering performance.
- Verify image optimization and loading.
- Test bundle size impacts.
- Monitor memory usage in tests.

## Accessibility Testing
- Include basic accessibility checks in component tests.
- Test keyboard navigation functionality.
- Verify ARIA attributes and semantic HTML.
- Test with simulated screen reader scenarios.

## Running Tests
- Run tests before every commit.
- Include tests in CI/CD pipeline.
- Generate coverage reports regularly.
- Fix failing tests immediately.

## Test Maintenance
- Update tests when requirements change.
- Refactor tests to improve readability.
- Remove obsolete tests when features are removed.
- Keep test dependencies up to date.