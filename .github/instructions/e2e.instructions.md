# E2E Testing Instructions

Guidelines for writing end-to-end tests for the Astro portfolio project using Playwright.

## Testing Framework
- Use **Playwright** for end-to-end testing.
- Place E2E tests in `e2e/` directory at project root.
- Use TypeScript for test files with `.spec.ts` extension.
- Follow page object model pattern for complex interactions.

## Test Structure

### Basic E2E Test Setup
```typescript
import { test, expect } from '@playwright/test';

test.describe('Portfolio Homepage', () => {
  test('should load and display main sections', async ({ page }) => {
    await page.goto('/');
    
    // Test page load and basic structure
    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
```

### Page Object Model
```typescript
export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async getHeroSection() {
    return this.page.locator('[data-testid="hero-section"]');
  }

  async clickProjectsSection() {
    await this.page.locator('[data-testid="projects-nav"]').click();
  }
}
```

## Testing Categories

### Navigation Testing
- Test main navigation functionality.
- Verify smooth scrolling to sections.
- Test responsive navigation on mobile.
- Ensure proper URL handling and routing.

### Content Display Testing
- Verify all portfolio sections render correctly.
- Test project cards and descriptions.
- Validate image loading and optimization.
- Check contact information display.

### Responsive Design Testing
- Test across multiple viewport sizes.
- Verify mobile navigation functionality.
- Test touch interactions on mobile devices.
- Ensure proper layout on tablet devices.

### Performance Testing
- Measure Core Web Vitals (LCP, FID, CLS).
- Test page load times across different networks.
- Verify image optimization and lazy loading.
- Monitor JavaScript bundle size impact.

## Accessibility Testing

### Keyboard Navigation
```typescript
test('should support keyboard navigation', async ({ page }) => {
  await page.goto('/');
  
  // Test tab navigation
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toBeVisible();
  
  // Test Enter key activation
  await page.keyboard.press('Enter');
  // Verify expected action occurred
});
```

### Screen Reader Testing
```typescript
test('should have proper ARIA labels', async ({ page }) => {
  await page.goto('/');
  
  const navigation = page.locator('nav');
  await expect(navigation).toHaveAttribute('aria-label');
  
  const buttons = page.locator('button');
  for (const button of await buttons.all()) {
    await expect(button).toHaveAccessibleName();
  }
});
```

## Cross-Browser Testing
- Test on Chromium, Firefox, and WebKit.
- Verify consistent behavior across browsers.
- Test vendor-specific CSS features.
- Ensure polyfills work correctly.

## Test Data and Fixtures
- Use realistic test data that matches production.
- Create fixtures for common test scenarios.
- Mock external APIs and services.
- Use test-specific data attributes for reliable selectors.

## Visual Testing
```typescript
test('should match visual regression screenshots', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png');
});
```

## Performance Assertions
```typescript
test('should meet Core Web Vitals thresholds', async ({ page }) => {
  await page.goto('/');
  
  // Measure Largest Contentful Paint
  const lcp = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        resolve(entries[entries.length - 1].startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  });
  
  expect(lcp).toBeLessThan(2500); // 2.5 seconds
});
```

## Error Handling Testing
- Test 404 page behavior.
- Verify graceful degradation without JavaScript.
- Test error boundaries and fallback content.
- Ensure proper error logging.

## SEO Testing
```typescript
test('should have proper SEO meta tags', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content');
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content');
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content');
});
```

## Test Configuration
- Configure test timeouts appropriately.
- Set up proper test data cleanup.
- Use consistent base URLs and environments.
- Configure retry strategies for flaky tests.

## CI/CD Integration
- Run E2E tests in CI pipeline.
- Generate test reports and screenshots.
- Fail builds on test failures.
- Store test artifacts for debugging.

## Test Maintenance
- Update tests when UI changes.
- Monitor test execution times.
- Fix flaky tests immediately.
- Keep Playwright and dependencies updated.

## Best Practices
- Use data-testid attributes for reliable selectors.
- Wait for elements instead of using hard delays.
- Keep tests independent and isolated.
- Use meaningful test descriptions.
- Group related tests logically.
- Clean up test data after each test.