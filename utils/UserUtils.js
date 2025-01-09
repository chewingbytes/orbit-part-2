const { User } = require("../models/user");
const fs = require("fs").promises;

// Read and write functions for JSON data
async function readJSON(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function writeJSON(object, filename) {
  try {
    const allObjects = await readJSON(filename);
    allObjects.push(object);
    await fs.writeFile(filename, JSON.stringify(allObjects), "utf8");
    return allObjects;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Add user to the database (signup)
async function addUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validation checks
    if (name.length < 3) {
      return res.status(400).json({ message: "Name must be at least 3 characters long."});
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ message: "Please enter a valid email address."});
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long."});
    }

    // Create a new user
    const newUser = new User(name, email, password);
    const updatedUsers = await writeJSON(newUser, "utils/users.json");

    return res
      .status(201)
      .json({ message: "User created successfully.", users: updatedUsers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Invalid signup credentials."});
  }
}

// User login (checking if the email and password match)
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ message: "Please enter a valid email address."});
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long."});
    }

    // Read all users and check if the email and password match
    const users = await readJSON("utils/users.json");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate a simple token (for demo purposes, you could use JWT in real apps)
    const token = Math.random().toString(36).substr(2); // simple token
    return res.status(200).json({
      message: "Login successful",
      token,
      userName: user.name, // Ensure userName is part of the response
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during login. Please try again later."});
  }
}

module.exports = {
  readJSON,
  writeJSON,
  addUser,
  loginUser,
};
