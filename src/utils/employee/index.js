const { connection } = require("../../db/index");
const getEmployees = require("../../db/queries/getEmployees.sql");

function viewEmployees() {
  connection.query(
    "SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id",
    function (err, results) {
      if (err) throw err;
      // console.log("import results", results);
      console.table(results);
    }
  );
}

function viewEmpDep(answer) {
  connection.query(
    `SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id WHERE name = '${answer.queryChoices}'`,
    function (err, results) {
      if (err) throw err;
      // console.log("import results", results);
      // console.log(answer);
      console.table(results);
    }
  );
}

// function viewEmpDep(answer) {
//   connection.query(
//     // WHERE department_name = ${answer}
//     "SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id WHERE name = {answer}")
//       if (err) throw err;
//       // console.log("import results", results);
//       console.table(results);
//     }
//   );
// }
module.exports = { viewEmployees, viewEmpDep };
