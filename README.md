# 🎓 Student Register — Backend API

A REST API built with Node.js, Express, and MongoDB for the Student Management Portal. Handles user authentication with JWT and bcrypt.

## 🚀 Features
- User Registration with bcrypt password hashing
- User Login with JWT authentication
- MongoDB Atlas integration
- Input validation and error handling

## 🛠️ Tech Stack
| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB Atlas | Database |
| Mongoose | ODM for MongoDB |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT authentication |
| dotenv | Environment variables |
| cors | Cross-origin requests |

## 📁 Folder Structure
```
student_register/
├── config/
│   └── db.js            # MongoDB connection
├── models/
│   └── User.js          # Mongoose user schema
├── routes/
│   └── registerauth.js  # Auth routes
├── app.js               # Express entry point
└── package.json
```

## ⚙️ Setup & Installation

1. Clone the repo
```bash
git clone https://github.com/Hariram26/student_register.git
cd student_register
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in root
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server
```bash
npm start
```
Server runs on `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Login and get JWT token |

### Register
```json
POST /api/register
{
  "name": "Harish Kumar",
  "email": "harish@example.com",
  "password": "123456"
}
```

### Login
```json
POST /api/login
{
  "email": "harish@example.com",
  "password": "123456"
}
```

## 👨‍💻 Author
**Hariram26** — [GitHub](https://github.com/Hariram26)
