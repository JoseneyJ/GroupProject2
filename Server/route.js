const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

//middleware backend sent to frontend
app.use(bodyParser.json());
//middleware that provides logging functionality for HTTP requests
app.use(morgan("tiny"));

//loading environment variables from a .env file and making them
//available in the process.env object.
require("dotenv").config();
const apiDatabaseUrl = process.env.API_URL;

// We are going to create an initial API route
app.get(`${apiDatabaseUrl}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "Thyme",
    image: "some url",
  };
  res.send(product);
});

app.post(`${apiDatabaseUrl}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

// start the server and listen for incoming requests
app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});
