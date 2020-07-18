const inquirer = require("inquirer");
const { viewEmployees } = require("../utils/employee");
const { viewEmpDep } = require("../utils/employee");
const { viewEmpByManager } = require("../utils/employee");
const { addEmployee } = require("../utils/employee");
const { removeEmployee } = require("../utils/employee");
const { updateEmpRole } = require("../utils/employee");
const { updateEmpManager } = require("../utils/employee");

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
            choices: [
              "Velma Dinkley",
              "Scooby Doo",
              "Fred Jones",
              "Scrappy Doo",
            ],
          })
          .then(function (answer) {
            viewEmpByManager(answer);
          });
      } else if (answer.queryChoices === "Add Employee") {
        inquirer
          .prompt([
            {
              name: "firstName",
              type: "input",
              message: "Enter employee first name you want to add:",
            },
            {
              name: "lastName",
              type: "input",
              message: "Enter employee's last name you want to add:",
            },
            {
              name: "roleId",
              type: "list",
              message:
                "What is the employee's role id?" +
                "\n Sales Lead: roleId(1) \n Salesperson: roleId(2) \n Lead Engineer: roleID(3) \n Software Engineer: roleId(4) \n Accountant:roleId(5) \n Legal Team Lead: roleId(6) \n Lawyer: roleId(7)",
              choices: [1, 2, 3, 4, 5, 6, 7],
            },

            {
              name: "managerId",
              type: "list",
              message:
                "What is the employee's manager id?" +
                "\n Scooby Doo: Id(1) \n Velma Dinkley: Id(2) \n Fred Jones: Id(4)",
              choices: [1, 2, 4],
            },
          ])
          .then(function (answer) {
            addEmployee(answer);
          });
      } else if (answer.queryChoices === "Remove Employee") {
        inquirer
          .prompt({
            name: "queryChoices",
            type: "input",

            message:
              "Which employee do you want to remove? Enter First Name only:",
          })
          .then(function (answer) {
            removeEmployee(answer);
          });
      } else if (answer.queryChoices === "Update Employee Role") {
        inquirer
          .prompt([
            {
              name: "firstName",
              type: "list",
              message: "Which Employee do you want update role",
              choices: [
                "Scooby",
                "Scrappy",
                "Velma",
                "Daphne",
                "Shaggy",
                "Fred",
                "Peter",
                "Mary Jane",
                "Steve",
              ],
            },
            {
              name: "roleId",
              type: "list",
              message:
                "Which role id do you want to change employee to?" +
                "\n Sales Lead: roleId(1) \n Salesperson: roleId(2) \n Lead Engineer: roleID(3) \n Software Engineer: roleId(4) \n Accountant:roleId(5) \n Legal Team Lead: roleId(6) \n Lawyer: roleId(7)",
              choices: [1, 2, 3, 4, 5, 6, 7],
            },
          ])
          .then(function (answer) {
            updateEmpRole(answer);
          });
      } else if (answer.queryChoices === "Update Employee Manager") {
        inquirer
          .prompt([
            {
              name: "firstName",
              type: "list",
              message: "Which Employee do you want change manager",
              choices: [
                "Scooby",
                "Scrappy",
                "Velma",
                "Daphne",
                "Shaggy",
                "Fred",
                "Peter",
                "Mary Jane",
                "Steve",
              ],
            },
            {
              name: "managerId",
              type: "list",
              message:
                "Choose employee's new Manager by selecting Manager id:" +
                "\n Scooby Doo: Id(1) \n Velma Dinkley: Id(2) \n Fred Jones: Id(4)",
              choices: [1, 2, 4],
            },
            {
              name: "manager",
              type: "list",
              message: "Choose manager name:",
              choices: ["Scooby", "Velma", "Fred"],
            },
          ])
          .then(function (answer) {
            updateEmpManager(answer);
          });
      } else if (answer.queryChoices === "None") {
        return process.exit(22); // "process.exit" is a function that exits from the current Node.js process..
        //↑ .. and takes a exit code, which is an integer. In this case it is 22..
        //..The "process" object is a "global variable" that lets us manage the current Node.js process..
        //.. and since it's global we can access it from anywhere inside a Node.js program without using "require" to import it
      }
    });
}

module.exports = { start };
