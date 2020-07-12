INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"),("Finance"),("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead",100000,1),
("Sales Person",80000,1),
("Lead Engineer",150000,2),
("Software engineer",120000,2),
("Accountant",125000,3),
("Legal Team Lead",250000,4),
("Lawyer",190000,4),
("Lawyer",190000,4),
("Lead Engineer",150000,2);

INSERT INTO employee (first_name, last_name,role_id,manager_id)
VALUES
("Scooby","Doo",1,1),
("Scrappy","Doo",2,2),
("Velma","Dinkley",3,3),
("Daphne","Blake",4,4),
("Shaggy","Rogers",5,5),
("Fred","Jones",6,6),
("Peter","Parker",7,7),
("Mary Jane","Watson",8,8);