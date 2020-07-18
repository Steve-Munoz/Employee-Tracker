const { connection } = require("../../db/index");
const getEmployees = require("../../db/queries/getEmployees.sql");

function viewEmployees() {
  connection.query(
    "SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.employee.manager,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id",
    function (err, results) {
      if (err) throw err;

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

function viewEmpByManager(answer) {
  connection.query(
    `SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name, employee_trackerdb.employee.manager  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id  WHERE manager = '${answer.queryChoices}'`,
    function (err, results) {
      if (err) throw err;
      // console.log("import results", results);
      // console.log(answer);
      console.table(results);
    }
  );
}

function addEmployee(answer) {
  connection.query(
    `INSERT INTO employee_trackerdb.employee(first_name, last_name,role_id,manager_id) VALUES('${answer.firstName}', '${answer.lastName}','${answer.roleId}','${answer.managerId}');`,

    function (err, results) {
      if (err) throw err;
      // console.log("import results", results);
      // console.log(answer);
      // console.table(results);
    }
  );

  connection.query(
    `SELECT employee_trackerdb.employee.id, employee_trackerdb.employee.first_name, employee_trackerdb.employee.last_name, employee_trackerdb.role.title,employee_trackerdb.role.salary, employee_trackerdb.department.name as department_name  FROM employee_trackerdb.employee INNER JOIN employee_trackerdb.role ON employee_trackerdb.employee.role_id = employee_trackerdb.role.id INNER JOIN employee_trackerdb.department ON employee_trackerdb.department.id = employee_trackerdb.role.department_id`,

    function (err, results) {
      if (err) throw err;
      console.table(results);
    }
  );
}

function removeEmployee(answer) {
  connection.query(
    `DELETE FROM employee_trackerdb.employee WHERE first_name = '${answer.queryChoices}'`,
    function (err, results) {
      if (err) throw err;
      console.log("Sucessfully removed employee");
      viewEmployees();
    }
  );
}
function updateEmpRole(answer) {
  connection.query(
    `SELECT first_name, last_name, role_id, manager_id, manager FROM employee_trackerdb.employee WHERE first_name = '${answer.firstName}'`,
    function (err, results) {
      if (err) throw err;
    }
  );
  connection.query(
    `UPDATE employee SET role_id = ${answer.roleId} WHERE first_name = '${answer.firstName}'`,
    function (err, results) {
      if (err) throw err;
      console.log("Successfully updated employee role");
      viewEmployees();
    }
  );
}
function updateEmpManager(answer) {
  connection.query(
    `SELECT first_name, last_name, role_id, manager_id, manager FROM employee_trackerdb.employee WHERE first_name = '${answer.firstName}'`,
    function (err, results) {
      if (err) throw err;
    }
  );
  connection.query(
    `UPDATE employee SET manager_id = '${answer.managerId}' WHERE first_name = '${answer.firstName}'`,
    function (err, results) {
      if (err) throw err;
    }
  );
  connection.query(
    `UPDATE employee SET manager = '${answer.manager}' WHERE first_name = '${answer.firstName}'`,
    function (err, results) {
      if (err) throw err;
      console.log("Successfully updated employee manager");
      viewEmployees();
    }
  );
}

module.exports = {
  viewEmployees,
  viewEmpDep,
  viewEmpByManager,
  addEmployee,
  removeEmployee,
  updateEmpRole,
  updateEmpManager,
};
