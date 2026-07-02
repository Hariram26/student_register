const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number},
    department: { type: String, required: true }
});

//Adding an index to the email field to ensure uniqueness and improve query performance.
studentSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Student', studentSchema);