# Authentification-System-
📌 Project Description

This is a full-stack authentication system built using the MERN stack (MongoDB, Express.js, React, Node.js).
It allows users to sign up, log in, and access a protected dashboard.

Frontend:

Built with React + Vite

Styled using Tailwind CSS

Includes Signup & Login forms with validation (React Hook Form)

Uses Axios for API requests

AuthContext is used for managing authentication state across the app

React Router is used for navigation between Home, Login, Signup, and Dashboard

Backend:

Built with Node.js + Express.js

Connected to MongoDB Atlas via Mongoose

Includes User model with fields: username, email, password

Password hashing with bcrypt

JWT authentication for login & protected routes

Routes:

/api/auth/register → Register a new user

/api/auth/login → Login existing user

/api/auth/me → Get logged-in user (protected)

Authentication Flow:

User registers with username, email, password

Backend saves user and returns a token

User logs in → receives token + user info

Token is stored in localStorage/context

Dashboard is accessible only after login

Logout clears token and redirects to home
