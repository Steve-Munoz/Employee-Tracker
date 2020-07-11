var inquirer = require("inquirer");

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
      ],
    })
    .then(function (answer) {
      if (answer.queryChoices === "View All Employees") {
        viewEmployees();
      } else if (answer.queryChoices === "View All Employees By Department") {
        viewEmpByDep();
      } else if (answer.queryChoices === "View All Employees By Manager") {
        viewEmpByManager();
      } else if (answer.queryChoices === "Add Employee") {
        addEmployee();
      } else if (answer.queryChoices === "Remove Employee") {
        removeEmployee();
      } else if (answer.queryChoices === "Update Employee Role") {
        updateEmpRole();
      } else if (answer.queryChoices === "Update Employee Manager") {
        updateEmpManager();
      }
    });
}
// module.export = start();
