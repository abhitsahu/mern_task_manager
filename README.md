
## Features

User Authentication: Secure login, registration, and logout using JWT (HttpOnly cookies) for protection against XSS attacks. Google OAuth is also integrated.

Task Management: Users can create, search, update, and delete tasks.

Drag-and-Drop: Easily manage tasks between "To Do", "In Progress", and "Done" columns.

Protected Routes: Only authenticated users can access protected pages, and already logged-in users cannot access login or signup pages.

Optimistic Updates: React Query is used for server-side caching and optimistic UI updates.

Responsive UI: Developed with React Beautiful DnD and customized UI components.
## 🛠️ Technologies Used
## Frontend:
React

Redux Toolkit for global state management

React Router for routing

React Query for handling server data and caching

React Hook Form (with Zod validation)

Axios for HTTP requests

Flowbite-React for UI components

React Toastify for user notifications

## Backend:
Node.js

Express.js for the API

MongoDB with Mongoose for the database

JWT for user authentication

Bcrypt.js for password hashing

Cookie-Parser for handling JWT cookies

## Installation

1. Clone repository

```shell
git clone https://github.com/abhitsahu/mern_task_manager.git
```

2. Install dependencies via npm

```shell
cd backend
```

```shell
npm i
```
# Change .env file

```shell
PORT=3000
MONGODB_URI=YOUR_URL
JWT_SECRET=your_jwt_secret_key
FRONTEND_BASE_URL= Frontend_URL
COOKIE_SECRET= SECRET


```
3. Start Backend

```shell
npm start
```

2. Install dependencies via npm

```shell
cd frontend
```

```shell
npm i
```
# Change .env file

```shell
VITE_BACKEND_BASE_URL=http://localhost:3000
VITE_FIREBASE_API_KEY=YOUR_KEY

```
3. Start Frontend

```shell
npm run dev
```







