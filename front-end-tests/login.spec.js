const { test, expect, chromium } = require("@playwright/test");
const v8toIstanbul = require('v8-to-istanbul');

test.describe("Login Page", () => {
  const baseUrl = "http://localhost:5050/login.html";

  test("should display the login form", async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.locator("h2")).toHaveText("Login");
    await expect(page.locator("#login-form")).toBeVisible();
  });

  test("should successfully login a user", async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill("#email", "testuser@example.com");
    await page.fill("#password", "password123");
    await page.click('button[type="submit"]');

    await page.waitForURL("http://localhost:5050/index.html");
    expect(page.url()).toBe("http://localhost:5050/index.html");
  });

  test("should navigate to signup page when clicking signup link", async ({
    page,
  }) => {
    await page.goto(baseUrl);
    await page.click('a[href="./signup.html"]');
    await page.waitForURL("http://localhost:5050/signup.html");
    expect(page.url()).toBe("http://localhost:5050/signup.html");
  });
});

test.describe("Homescreen Access", () => {
  const fakeToken = "fake-token";

  test("should display homescreen for logged-in user", async ({ page }) => {
    await page.goto("http://localhost:5050/login.html");
    await page.evaluate((token) => {
      localStorage.setItem("token", token);
      localStorage.setItem("userName", "Test User");
    }, fakeToken);

    await page.goto("http://localhost:5050/index.html");

    await expect(page.locator("h2")).toHaveText("Welcome to Orbit Part 2");
    await expect(page.locator("#user-welcome")).toHaveText(
      "Welcome, Test User!"
    );
  });

  test("should not show homescreen for users not logged in and redirect to loginform", async ({
    page,
  }) => {
    await page.goto("http://localhost:5050/index.html");

    await page.waitForURL("http://localhost:5050/login.html");
    expect(page.url()).toBe("http://localhost:5050/login.html");
  });
});
