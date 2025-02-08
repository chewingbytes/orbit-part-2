const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const statusMonitor = require("express-status-monitor");

const app = express();
const logger = require("./logger");
const PORT = process.env.PORT || 5050;
const homepage = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "instrumented")));
app.use(express.static(path.join(__dirname, "public")));

const monitor = statusMonitor({
  websocket: true,
  path: "/status"
});

app.use(monitor);

// Import user-related functions
const { addUser, loginUser } = require("./utils/UserUtils");

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "login.html")));
app.get("/signup", (req, res) => res.sendFile(path.join(__dirname, "signup.html")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, homepage)));

app.post("/signup", addUser);
app.post("/login", loginUser);

// Create HTTP server instead of using `app.listen`
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  logger.info(`Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };
