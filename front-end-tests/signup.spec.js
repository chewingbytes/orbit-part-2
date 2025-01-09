const { test, expect } = require('@playwright/test');

test.describe('Signup Page', () => {
  const baseUrl = 'http://localhost:5050/signup.html';

  test('should display the signup form', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.locator('h2')).toHaveText('Signup');
    await expect(page.locator('#signup-form')).toBeVisible();
  });

  test('should successfully signup a new user', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'testuser@example.com');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');

    await page.waitForURL('http://localhost:5050/login.html');
    expect(page.url()).toBe('http://localhost:5050/login.html');
  });
});
