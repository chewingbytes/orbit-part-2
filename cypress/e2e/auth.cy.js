describe("Auth Frontend", () => {
  let baseUrl;

  before(() => {
    cy.task("startServer").then((url) => {
      baseUrl = url; // Store the base URL
      Cypress.env("baseUrl", baseUrl); // Set baseUrl as a Cypress environment variable
      cy.visit(baseUrl);
    });
  });

  after(() => {
    return cy.task("stopServer");
  });

  beforeEach(() => {
    baseUrl = Cypress.env("baseUrl"); // Retrieve baseUrl from Cypress environment variable
  });

  describe("Login Page", () => {
    it("should display the login form", () => {
      cy.visit(baseUrl);
      cy.get("h2").should("have.text", "Login");
      cy.get("#login-form").should("be.visible");
    });

    it("should successfully login a user", () => {
      cy.visit(baseUrl);
      cy.get("#email").type("testuser@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.url().should("include", "/index.html");
    });

    it("should navigate to signup page when clicking signup link", () => {
      cy.visit(baseUrl);
      cy.get('a[href="./signup.html"]').click();
      cy.url().should("include", "/signup.html");
    });

    it("should display an error for invalid login credentials", () => {
      cy.intercept("POST", "/login", {
        statusCode: 401,
        body: { message: "Invalid credentials." },
      });

      cy.visit(`${baseUrl}/login.html`);
      cy.get("#email").type("invalid@example.com");
      cy.get("#password").type("wrongpassword");
      cy.get('button[type="submit"]').click();

      cy.get("#login-error").should("have.text", "Invalid credentials.");
    });

    it('should store "Guest" as the username when userName is missing in response', () => {
      cy.intercept("POST", `${baseUrl}/login`, {
        statusCode: 200,
        body: { token: "fake-token" },
      });

      cy.visit(`${baseUrl}/login.html`);
      cy.get("#email").type("testuser@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.window().then((window) => {
        expect(window.localStorage.getItem("token")).to.eq("fake-token");
        expect(window.localStorage.getItem("userName")).to.eq("Guest");
      });

      cy.url().should("include", "/index.html");
    });

    it("should display a generic error message for network issues", () => {
      cy.intercept("POST", "/login", { forceNetworkError: true });

      cy.visit(`${baseUrl}/login.html`);
      cy.get("#email").type("testuser@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.get("#login-error").should(
        "have.text",
        "An error occurred during login. Please try again later."
      );
    });
  });

  describe("Homescreen Access", () => {
    const fakeToken = "fake-token";

    it("should display homescreen for logged-in user", () => {
      cy.visit(`${baseUrl}/login.html`);
      cy.window().then((window) => {
        window.localStorage.setItem("token", fakeToken);
        window.localStorage.setItem("userName", "Test User");
      });

      cy.visit(`${baseUrl}/index.html`);
      cy.get("h2").should("have.text", "Welcome to Orbit Part 2");
      cy.get("#user-welcome").should("have.text", "Welcome, Test User!");
    });

    it("should not show homescreen for users not logged in and redirect to login form", () => {
      cy.visit(`${baseUrl}/index.html`);
      cy.url().should("include", "/login.html");
    });
  });

  describe("Signup Page", () => {
    let signupUrl;

    beforeEach(() => {
      const baseUrl = Cypress.env("baseUrl"); // Retrieve baseUrl from Cypress environment variable
      signupUrl = `${baseUrl}/signup.html`;
    });

    it("should display the signup form", () => {
      cy.visit(signupUrl);
      cy.get("h2").should("have.text", "Signup");
      cy.get("#signup-form").should("be.visible");
    });

    it("should successfully signup a new user", () => {
      cy.visit(signupUrl);
      cy.get("#name").type("Test User");
      cy.get("#email").type("testuser@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.url().should("include", "/login.html");
    });

    it("should display an error for duplicate email", () => {
      cy.intercept("POST", "/signup", {
        statusCode: 400,
        body: { message: "Invalid signup credentials." },
      });

      cy.visit(signupUrl);
      cy.get("#name").type("alicegreen");
      cy.get("#email").type("alice.greene@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.get("#signup-error").should(
        "have.text",
        "Invalid signup credentials."
      );
    });

    it("should display a generic error message for network issues", () => {
      cy.intercept("POST", "/signup", { forceNetworkError: true });

      cy.visit(signupUrl);
      cy.get("#name").type("test");
      cy.get("#email").type("testuser@example.com");
      cy.get("#password").type("password123");
      cy.get('button[type="submit"]').click();

      cy.get("#signup-error").should(
        "have.text",
        "An error occurred during signup."
      );
    });
  });
});
