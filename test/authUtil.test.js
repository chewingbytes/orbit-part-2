const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
let baseUrl;
describe("Auth API", () => {
  before(async () => {
    const { address, port } = await server.address();
    baseUrl = `http://${address == "::" ? "localhost" : address}:${port}`;
  });
  after(() => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });
  describe("Authentication API", () => {
    // Dummy user data for testing
    const user = {
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
    };

    // Variables to store tokens for subsequent tests
    let token;

    // Test Suite for Signup
    describe("POST /signup", () => {
      it("should return 400 and inform user for missing fields", (done) => {
        chai
          .request(baseUrl)
          .post("/signup")
          .send({ name: user.name, email: "", password: user.password })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal("Please enter a valid email address.");
            done();
          });
      });

      it("should return 400 and inform user for invalid email format", (done) => {
        chai
          .request(baseUrl)
          .post("/signup")
          .send({
            name: user.name,
            email: "invalid-email",
            password: user.password,
          })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal("Please enter a valid email address.");
            done();
          });
      });

      it("should return 400 and inform user for weak password", (done) => {
        chai
          .request(baseUrl)
          .post("/signup")
          .send({ name: user.name, email: user.email, password: "123" })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal(
              "Password must be at least 6 characters long."
            );
            done();
          });
      });

      it("should return 400 and inform user for too short of a username", (done) => {
        chai
          .request(baseUrl)
          .post("/signup")
          .send({ name: "hi", email: user.email, password: user.password })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal(
              "Name must be at least 3 characters long."
            );
            done();
          });
      });

      it("should successfully sign up a user", (done) => {
        chai
          .request(baseUrl)
          .post("/signup")
          .send({ name: user.name, email: user.email, password: user.password })
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body.message).to.equal("User created successfully.");
            done();
          });
      });
    });

    // Test Suite for Login
    describe("POST /login", () => {
      it("should return 400 and inform user for missing email", (done) => {
        chai
          .request(baseUrl)
          .post("/login")
          .send({ email: "", password: user.password })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal(
              "Please enter a valid email address."
            );
            done();
          });
      });

      it("should return 400 and inform user for missing password", (done) => {
        chai
          .request(baseUrl)
          .post("/login")
          .send({ email: user.email, password: "" })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal(
              "Password must be at least 6 characters long."
            );
            done();
          });
      });

      it("should return 400 and inform user for invalid email or password", (done) => {
        chai
          .request(baseUrl)
          .post("/login")
          .send({ email: "wrongemail@example.com", password: "wrongpassword" })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal("Invalid email or password.");
            done();
          });
      });

      it("should successfully log in a user and return a token", (done) => {
        chai
          .request(baseUrl)
          .post("/login")
          .send({ email: user.email, password: user.password })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("token");
            token = res.body.token; // Store token for future tests
            done();
          });
      });
    });
  });
});