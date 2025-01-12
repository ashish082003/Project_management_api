# Project Management API

This is a **Project Management API** built using Node.js, Express, MySQL, and Sequelize. It provides comprehensive features for managing projects, tasks, and team members. The API comes with interactive Swagger documentation for seamless testing and exploration of endpoints.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JWT
- **Documentation**: Swagger UI
- **Tools**: Sequelize CLI, dotenv, nodemon

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Steps
1. Clone the repository:
   ```bash
   https://github.com/ashish082003/Project_management_api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd project-management-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables.
 ## Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>
DB_NAME=project_management

# Authentication
JWT_SECRET=<your-jwt-secret>
```

---

6. Set up the database.
7. Start the server:
   ```bash
   node app.js
   ```
8. Access Swagger UI at:  
   `http://localhost:<PORT>/api-docs`.

---


