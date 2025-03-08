const express = require("express");
const mysql = require("mysql2");
const { Client } = require("pg");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Middleware to parse JSON

const PORT = 5000;

// MySQL Connection
const mysqlDb = mysql.createConnection({
  host: "mysql",
  user: "user",
  password: "userpass",
  database: "employee_data"
});

// PostgreSQL Connection
const pgClient = new Client({
  host: "postgres",
  user: "user",
  password: "userpass",
  database: "cleaned_data"
});
pgClient.connect();

// Temporary Storage for Extracted & Transformed Data
let extractedData = [];
let transformedData = [];

// **Extract Data from MySQL and Store in Memory**
app.get("/extract", (req, res) => {
  mysqlDb.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.json({ error: err.message });

    extractedData = results; // ✅ Store extracted data in memory
    res.json({ message: "Data extracted successfully", data: extractedData });
  });
});

// **Transform Data from Extracted Storage**
app.get("/transform", (req, res) => {
  if (extractedData.length === 0) {
    return res.status(400).json({ error: "No extracted data available. Please run /extract first." });
  }

  transformedData = extractedData.map((record) => ({
    ...record,
    name: record.name.charAt(0).toUpperCase() + record.name.slice(1), // ✅ Capitalize Name
  }));

  res.json({ message: "Data transformed successfully", data: transformedData });
});

// **Load Transformed Data into PostgreSQL**
app.get("/load", async (req, res) => {
  if (transformedData.length === 0) {
    return res.status(400).json({ error: "No transformed data available. Please run /transform first." });
  }

  try {
    for (let row of transformedData) {
      await pgClient.query(
        "INSERT INTO employees (id, name, department, salary) VALUES ($1, $2, $3, $4)",
        [row.id, row.name, row.department, row.salary]
      );
    }

    transformedData = []; // ✅ Clear after loading
    res.json({ message: "Transformed data loaded into PostgreSQL!" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
