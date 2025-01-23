const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

// Create an express app
const app = express();
const port = 5000;

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Use the cors middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Use the routes defined in the routes folder
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
