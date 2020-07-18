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

INSERT INTO employee (first_name, last_name,role_id,manager_id, manager)
VALUES
("Scooby","Doo",1,2, "Velma Dinkley"),
("Scrappy","Doo",2,1,"Scooby Doo"),
("Velma","Dinkley",3,null,null),
("Daphne","Blake",4,3,"Velma Dinkley"),
("Shaggy","Rogers",5,null,null),
("Fred","Jones",6,null,null),
("Peter","Parker",7,4,"Fred Jones"),
("Mary Jane","Watson",8,5,"Scrappy Doo");