const express = require("express");
const initRoutes = require("./src/routes");
// Initialize Express
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to the MySQL database
require("./src/models");
initRoutes(app)
// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
