// ✅ 1. Environment & DB — must be at the very top
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

// ✅ 2. Core imports
var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var cors    = require('cors');

// ✅ 3. Route imports
var indexRouter = require('./routes/index');
var authRouter = require('./routes/registerauth');
var studentRouter = require('./routes/student');

// ✅ 4. Create app and middleware
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ 5. Routes
//app.use('/', indexRouter);
app.use('/api', authRouter);   // POST /api/register
app.use('/api', studentRouter);  // your student routes

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

module.exports = app;