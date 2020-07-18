// ↓ This is a Node.js module available thorugh the npm registry. Need to run " npm install mysql" to install mysql dependency
const { start } = require("./inquirer");
const { connection } = require("./db/index.js");
// const {start} = require("./prompt");

connection.connect(function (err) {
  if (err) throw err; //this mean connection failed!!

  start(); // if this line is reached and does throw err, run this "start()" function, which is my prompt which i imported from prompt.js file
});
