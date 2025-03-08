# 🚀 ETL Pipeline Using Docker, MySQL, and PostgreSQL

This project implements an **ETL (Extract, Transform, Load) pipeline** using **Dockerized MySQL and PostgreSQL** containers. The pipeline extracts data from MySQL, transforms it in a Node.js backend, and loads it into PostgreSQL.

## 📌 Features
- **Extract** data from a MySQL database.
- **Transform** the extracted data (e.g., capitalize names).
- **Load** transformed data into a PostgreSQL database.
- **Dockerized environment** for seamless deployment.
- **Automated data initialization** using `init.sql`.

---

## 🏗️ **Project Architecture**
1. **MySQL Database** - Stores raw data (initialized using `init.sql`).
2. **Node.js Backend (Express.js)** - Handles API routes for extraction, transformation, and loading.
3. **PostgreSQL Database** - Stores the cleaned and transformed data.
4. **Docker Compose** - Manages the containers for MySQL, PostgreSQL, and the backend service.

---

## ⚙️ **Setup Instructions**

### **🔹 Prerequisites**
Ensure you have the following installed:
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)
- [Node.js & npm](https://nodejs.org/)

### **🔹 Clone the Repository**
```bash
git clone https://github.com/dinkleva/etl_project.git
cd etl_project


🛢 MySQL: employee_data

id	name	department	salary
1	alice	HR	50000
2	bob	    IT	60000

🛢 PostgreSQL: cleaned_data

id	name	department	salary
1	Alice	HR	50000
2	Bob	    IT	60000

🚀 Enhancements & Future Work
✅ Automate data validation before loading.
✅ Implement logging and error handling.
✅ Optimize database queries for performance.
✅ Deploy on a cloud platform (e.g., AWS, GCP).


🏆 Author
👤 dinkleva
💼 Passionate about data engineering & backend development!