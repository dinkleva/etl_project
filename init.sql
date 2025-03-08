CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary) VALUES
('alice', 'Engineering', 75000),
('bob', 'Marketing', 60000),
('charlie', 'HR', 55000);

