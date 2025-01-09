const path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const PORT = process.env.PORT || 5050;
var homepage = "index.html";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "instrumented")));

// Import the user-related functions
const { addUser, loginUser } = require("./utils/UserUtils");

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "signup.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/instrumented/" + homepage);
});

app.post("/signup", addUser);

// POST route for user login
app.post("/login", loginUser);

// Start the server
server = app.listen(PORT, function () {
  const address = server.address();
  const baseUrl = `http://${
    address.address == "::" ? "localhost" : address.address
  }:${address.port}`;
  console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
