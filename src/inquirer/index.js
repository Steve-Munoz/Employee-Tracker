var inquirer = require("inquirer");
var { viewEmployees } = require("../utils/employee");
var { viewEmpDep } = require("../utils/employee");

// ↓ This package prints MySQL rows to the console
const cTable = require("console.table");

function start() {
  inquirer
    .prompt({
      name: "queryChoices",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "None",
      ],
    })
    .then(function (answer) {
      if (answer.queryChoices === "View All Employees") {
        viewEmployees();
      } else if (answer.queryChoices === "View All Employees By Department") {
        // prompt to have user select department
        inquirer
          .prompt({
            name: "queryChoices",
            type: "list",
            message:
              "Which Department would you like to view all employees from?",
            choices: ["Sales", "Engineering", "Finance", "Legal"],
          })
          .then(function (answer) {
            viewEmpDep(answer);
          });
      } else if (answer.queryChoices === "View All Employees By Manager") {
        inquirer
          .prompt({
            name: "queryChoices",
            type: "list",
            message: "Which Manager would you like to view all employees?",
            choices: ["Velma Dinkley", "Scooby Doo", "Peter Parker"],
          })
          .then(function (answer) {
            viewEmpByManager(answer);
          });
      } else if (answer.queryChoices === "Add Employee") {
        inquirer
          .prompt({
            name: "queryChoices",
            type: "input",
            message: "Enter employee name you want to add:",
          })
          .then(function (answer) {
            addEmployee(answer);
          });
      } else if (answer.queryChoices === "Remove Employee") {
        inquirer
          .prompt({
            name: "queryChoices",
            type: "input",
            message: "Which employee do you want to remove:",
          })
          .then(function (answer) {
            removeEmployee(answer);
          });
      } else if (answer.queryChoices === "Update Employee Role") {
        updateEmpRole();
      } else if (answer.queryChoices === "Update Employee Manager") {
        updateEmpManager();
      } else if (answer.queryChoices === "None") {
        return process.exit(22); // "process.exit" is a function that exits from the current Node.js process..
        //↑ .. and takes a exit code, which is an integer. In this case it is 22..
        //..The "process" object is a "global variable" that lets us manage the current Node.js process..
        //.. and since it's global we can access it from anywhere inside a Node.js program without using "require" to import it
      }
    });
}

module.exports = { start };
