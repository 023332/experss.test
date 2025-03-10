# Todo List API

## Overview
This project is a simple Todo List API built with Node.js and Express. It allows users to manage tasks with features such as creating, retrieving, updating, and deleting tasks. The API supports pagination and validation to ensure data integrity.

## Project Structure
```
todo-list-api
├── controllers
│   └── taskController.js      # Handles task-related operations
├── routes
│   └── taskRoutes.js          # Defines routes for task operations
├── utils
│   └── validate.js            # Contains validation functions for task data
├── .env                        # Environment variables
├── app.js                      # Entry point of the application
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Create a `.env` file in the root directory and add your environment variables.
2. Start the server:
   ```
   npm start
   ```
3. The API will be running on `http://localhost:3000`.

## API Endpoints
- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve a paginated list of tasks.
- **GET /tasks/:id**: Retrieve a specific task by its ID.
- **PUT /tasks/:id**: Update an existing task.
- **DELETE /tasks/:id**: Delete a task by its ID.

## Validation
The API includes validation for task data:
- Title and description are required.
- Task date must be in the format YYYY-MM-DD and cannot be in the past.
- A maximum of three tasks can be created for the same date.

## License
This project is licensed under the MIT License.# expers
