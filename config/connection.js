const sequelize = require("sequelize");
//create a connection object
require("dotenv").config();

const sequelize = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    host: "localhost",
    dialect: "mysql",
    port: 3000,
  }
);
// //database name
// "plants_db",
//   //user
//   "customer",
//   //password
//   "password";

module.exports = sequelize;
