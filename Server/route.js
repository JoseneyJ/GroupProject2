const express = require("express");
const app = express();

//loading environment variables from a .env file and making them
//available in the process.env object.
require("dotenv").config();
const apiDatabaseUrl = process.env.API_URL;
const apiKey = process.env.api_Key;

// We are going to create an initial API route
app.get("/", (req, res) => {
  res.send("Hello World of API !");
});
// start the server and listen for incoming requests
app.listen(3000, () => {
  console.log(apiDatabaseUrl);
  console.log("server is listening on http://localhost:3000");
});
