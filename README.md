# Express App

This project is an Express.js application that provides a RESTful API for user authentication, post management, and comment handling. It uses MySQL as the database and EJS for rendering views.

## Features

- User registration and login
- User profile management
- Post creation, retrieval, and updating
- Comment management on posts
- API documentation view

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS
- JOI for validation
- bcrypt for password hashing
- dotenv for environment variable management

## Project Structure

```
express-app
├── src
│   ├── controllers          # Contains controller logic for handling requests
│   ├── models               # Contains database models
│   ├── routes               # Contains route definitions
│   ├── views                # Contains EJS view templates
│   ├── middlewares          # Contains middleware functions
│   ├── utils                # Contains utility functions (e.g., database connection)
│   └── app.js               # Main application file
├── public                   # Contains static files (CSS, JS)
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── migrate.js                # Server entry point
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your database connection details and any other necessary environment variables.

4. Start the server:
   ```
   npm start
   ```

## Usage

- **Registration**: POST `/api/register` with `fName`, `lName`, `email`, and `password`.
- **Login**: POST `/api/login` with `email` and `password`.
- **Get Users List**: GET `/api/users`.
- **Get User Profile**: GET `/api/users/:id`.
- **Create Post**: POST `/api/posts` with `title`, `description`, and `userId`.
- **Get Posts**: GET `/api/posts` or `/api/posts?userId=:userId`.
- **Get Single Post**: GET `/api/posts/:id`.
- **Update User Profile**: PUT `/api/users/:id` with updated user data.
- **Update Post**: PUT `/api/posts/:id` with updated post data.
- **Delete User**: DELETE `/api/users/:id`.
- **Delete Post**: DELETE `/api/posts/:id`.

## API Documentation

For a detailed list of available APIs, visit the API documentation page at `/apis`.

## License

This project is licensed under the MIT License.# exam3
