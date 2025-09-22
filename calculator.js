 const express = require("express");
const app = express();
const PORT = 3000;

// Addition
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send(`Addition = ${a + b}`);
});

// Subtraction
app.get("/sub", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send(`Subtraction = ${a - b}`);
});

// Multiplication
app.get("/mul", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send(`Multiplication = ${a * b}`);
});

// Division
app.get("/div", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) {
    return res.send("Error: Division by zero!");
  }
  res.send(`Division = ${a / b}`);
});

app.listen(PORT, () => {
  console.log(`Calculator API running at http://localhost:${PORT}`);
});
