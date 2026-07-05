# 🎓 Student Register — Backend API

A REST API built with Node.js, Express, and MongoDB for the Student Management Portal. Handles user authentication with JWT and bcrypt, and full CRUD operations for student records.

## 🚀 Features
- User Registration with bcrypt password hashing
- User Login with JWT authentication
- Student CRUD operations (Create, Read, Update, Delete)
- MongoDB Atlas integration
- Input validation and error handling
- Auto server restart with nodemon

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
| nodemon | Auto server restart |

## 📁 Folder Structure
```
student_register/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── User.js            # Mongoose user schema
│   └── student.js         # Mongoose student schema
├── routes/
│   ├── registerauth.js    # Auth routes (register & login)
│   └── student.js         # Student CRUD routes
├── app.js                 # Express entry point
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
PORT=3001
```

4. Start the server
```bash
# Development (auto restart)
npm run dev

# Production
npm start
```
Server runs on `http://localhost:3001`

## 📡 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Login and get JWT token |

### Student Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Add a new student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get single student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

### Example — Add Student
```json
POST /api/students
{
  "name": "Harish Kumar",
  "email": "harish@student.com",
  "phone": "9876543210",
  "department": "Computer Science",
  "semester": 3,
  "dateOfBirth": "2000-05-15",
  "gender": "Male"
}
```

## 👨‍💻 Author
**Hariram26** — [GitHub](https://github.com/Hariram26)
