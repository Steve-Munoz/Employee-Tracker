DROP DATABASE IF EXISTS employee_TrackerDB;

-- ↓ Creates the "employee_TrackerDB" database --
CREATE database employee_TrackerDB;

-- ↓ Makes it so all of the following code will affect "employee_TrackerDB" --
USE employee_TrackerDB;

-- ↓ Creates the table "department" within animals_db --
CREATE TABLE department (
-- ↓ Creates a numeric column called "id" which will automatically.. 
-- increment its default value as we create new rows and..
-- sets id as this table's primary key which means all data contained within it will be unique --
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  --↓ Makes a string column called "name" which default is null --
  name VARCHAR(30) NULL
  
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  DEPARTMENT_ID INT NULL
  
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id DECIMAL NULL
  
);

SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;
