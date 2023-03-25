const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const sequelize = require("./config/connection");
const path = require("path");
const PORT = process.env.PORT || 3000;

//import module to sync table with database
const product = require("./models/product");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//force true to drop/recreate table on every sync operation
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("listening on port"));
});

//middleware backend sent to frontend
// app.use(bodyParser.json());
// //middleware that provides logging functionality for HTTP requests
// app.use(morgan("tiny"));

//loading environment variables from a .env file and making them
//available in the process.env object.

const apiDatabaseUrl = process.env.API_URL;

// We are going to create an initial API route to send to frontend
// app.get(`${apiDatabaseUrl}/products`, (req, res) => {
//   const product = {
//     id: 1,
//     name: "Thyme",
//     image: "some url",
//   };
//   res.send(product);
// });

// app.post(`${apiDatabaseUrl}/products`, (req, res) => {
//   const newProduct = req.body;
//   console.log(newProduct);
//   res.send(newProduct);
// });

// start the server and listen for incoming requests
app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});
