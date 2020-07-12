// ↓ This is a Node.js module available thorugh the npm registry. Need to run " npm install mysql" to install mysql dependency
const mysql = require("mysql");
const { start } = require("./inquirer");
const { connection } = require("./db/index.js");
// const {start} = require("./prompt");

// ↓ creates the connection information for the sql database.
// var connection = mysql.createConnection({
//   // ↓ below are my connection options. See https://www.npmjs.com/package/mysql for more info
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "employee_TrackerDB",
// });
// ↓ connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err; //this mean connection failed!!

  start(); // if this line is reached and does throw err, run this "start()" function, which is my prompt which i imported from prompt.js file
});
