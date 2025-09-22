 const express = require("express");
const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Nasir's Node.js Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
