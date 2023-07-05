require("dotenv").config();
// require("./config/database").connect();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// importing user context
// const User = require("./model/user");

// Register
app.get("/register", (req, res) => {
  // our register logic goes here...
  res.status(200).send({
    message: "User registered successfully",
  });
});

// Login
app.post("/login", (req, res) => {
  // our login logic goes here
});

module.exports = app;
