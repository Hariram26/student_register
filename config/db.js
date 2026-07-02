const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4,
    });
    console.log('MongoDB connected ✅');
  } catch (err) {
    console.error('MongoDB connection failed ❌');
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;