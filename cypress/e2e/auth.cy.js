describe("Auth Frontend", () => {
  let baseUrl;
  before(() => {
    cy.task("startServer").then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);
    });
  });
  after(() => {
    return cy.task("stopServer"); 
  });
});

describe('Login Page', () => {
  it('should display the login form', () => {
    cy.visit(baseUrl);
    cy.get('h2').should('have.text', 'Login');
    cy.get('#login-form').should('be.visible');
  });

  it('should successfully login a user', () => {
    cy.visit(baseUrl);
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();

    // Assume successful login redirects to a dashboard page
    cy.url().should('eq', 'http://localhost:5050/index.html');
  });

  it('should navigate to signup page when clicking signup link', () => {
    cy.visit(baseUrl);
    cy.get('a[href="./signup.html"]').click();
    cy.url().should('eq', 'http://localhost:5050/signup.html');
  });

  it('should display an error for invalid login credentials', () => {
    cy.intercept('POST', '/login', {
      statusCode: 401,
      body: { message: 'Invalid credentials.' },
    });
  
    cy.visit('http://localhost:5050/login.html');
    cy.get('#email').type('invalid@example.com');
    cy.get('#password').type('wrongpassword');
    cy.get('button[type="submit"]').click();
  
    cy.get('#login-error').should('have.text', 'Invalid credentials.');
  });

  it('should store "Guest" as the username when userName is missing in response', () => {
    // Intercept the login POST request to simulate a response without userName
    cy.intercept('POST', 'http://localhost:5050/login', {
      statusCode: 200,
      body: { token: 'fake-token' }, // No userName provided
    });
  
    // Visit the login page
    cy.visit('http://localhost:5050/login.html');
  
    // Fill out the form with valid credentials
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
  
    // Submit the form
    cy.get('button[type="submit"]').click();
  
    // Assert that the token is stored in localStorage
    cy.window().then((window) => {
      expect(window.localStorage.getItem('token')).to.eq('fake-token');
    });
  
    // Assert that "Guest" is stored as the userName in localStorage
    cy.window().then((window) => {
      expect(window.localStorage.getItem('userName')).to.eq('Guest');
    });
  
    // Ensure the user is redirected to the homepage
    cy.url().should('eq', 'http://localhost:5050/index.html');
  });

  it('should display a generic error message for network issues', () => {
    cy.intercept('POST', '/login', { forceNetworkError: true });
  
    cy.visit('http://localhost:5050/login.html');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
  
    cy.get('#login-error').should('have.text', 'An error occurred during login. Please try again later.');
  });



});

describe('Homescreen Access', () => {
  const fakeToken = 'fake-token';

  it('should display homescreen for logged-in user', () => {
    // Set the token in localStorage to simulate a logged-in user
    cy.visit('http://localhost:5050/login.html'); // Ensure the page is loaded
    cy.window().then((window) => {
      window.localStorage.setItem('token', fakeToken);
      window.localStorage.setItem('userName', 'Test User'); // Optional: Store username
    });

    cy.visit('http://localhost:5050/index.html');

    cy.get('h2').should('have.text', 'Welcome to Orbit Part 2');
    cy.get('#user-welcome').should('have.text', 'Welcome, Test User!');
  });

  it('should not show homescreen for users not logged in and redirect to loginform', () => {
    cy.visit('http://localhost:5050/index.html'); // Ensure the page is loaded

    cy.url().should('eq', 'http://localhost:5050/login.html');
  });
});

describe('Signup Page', () => {
  const baseUrl = 'http://localhost:5050/signup.html';

  it('should display the signup form', () => {
    cy.visit(baseUrl);
    cy.get('h2').should('have.text', 'Signup');
    cy.get('#signup-form').should('be.visible');
  });

  it('should successfully signup a new user', () => {
    cy.visit(baseUrl);
    cy.get('#name').type('Test User');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:5050/login.html');
  });

  it('should display an error for duplicate email', () => {
    cy.intercept('POST', '/signup', {
      statusCode: 400,
      body: { message: 'Invalid signup credentials.' },
    });
  
    cy.visit('http://localhost:5050/signup.html');
    cy.get('#name').type('alicegreen');
    cy.get('#email').type('alice.greene@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
  
    cy.get('#signup-error').should('have.text', 'Invalid signup credentials.');
  });

  it('should display a generic error message for network issues', () => {
    cy.intercept('POST', '/signup', { forceNetworkError: true });
  
    cy.visit('http://localhost:5050/signup.html');
    cy.get('#name').type('test');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
  
    cy.get('#signup-error').should('have.text', 'An error occurred during signup.');
  });
});
