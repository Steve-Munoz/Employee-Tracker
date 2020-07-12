const mysql = require("mysql");

var connection = mysql.createConnection({
  // ↓ below are my connection options. See https://www.npmjs.com/package/mysql for more info
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_TrackerDB",
});

module.exports = { connection };
