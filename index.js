const path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const logger = require('./logger');
const PORT = process.env.PORT || 5050;
var homepage = "index.html";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "instrumented")));
app.use(express.static(path.join(__dirname, 'public')));  

const statusMonitor = require("express-status-monitor");
app.use(statusMonitor());

const { addUser, loginUser } = require("./utils/UserUtils");

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "signup.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + homepage);
});

app.post("/signup", addUser);

app.post("/login", loginUser);

server = app.listen(PORT, function () {
  const address = server.address();
  const baseUrl = `http://${
    address.address == "::" ? "localhost" : address.address
  }:${address.port}`;
  console.log(`Demo project at: ${baseUrl}`);
  logger.info(`demo project at: ${baseUrl}`);
  logger.error(`example or error log`);
});

module.exports = { app, server };
