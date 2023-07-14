const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());

// Routes
app.post("/addInventory", (req, res) => {
  res.send("Welcome to the server!");
});

module.exports = app;
