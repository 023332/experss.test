# Node Express Backend

This project is a backend application built using Node.js and Express. It provides a RESTful API for managing tasks and user authentication, utilizing MySQL as the database and Joi for data validation.

## Features

- User registration and login with JWT authentication
- CRUD operations for tasks
- Input validation using Joi
- Middleware for authentication and validation
- MySQL database integration

## Project Structure

```
node-express-backend
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middlewares
│   │   ├── authMiddleware.js
│   │   └── validationMiddleware.js
│   ├── models
│   │   ├── taskModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── services
│   │   ├── authService.js
│   │   └── taskService.js
│   ├── utils
│   │   └── db.js
│   ├── app.js
│   └── server.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-express-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection details and secret keys:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user

### Tasks

- **POST /api/tasks**: Create a new task
- **GET /api/tasks**: Retrieve all tasks
- **GET /api/tasks/:id**: Retrieve a task by ID
- **PUT /api/tasks/:id**: Update a task by ID
- **DELETE /api/tasks/:id**: Delete a task by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.