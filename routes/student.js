const express = require('express');
const router = express.Router();
const Student = require('../model/student');

//1. Create a POST route for creating a new student

router.post('/student', async (req, res) => {
  try {
    const { name, email, phone, department, semester, dateOfBirth, gender } = req.body;


    // Validation for required fields and email format
    if (!name || !email || !phone || !department || !semester || !dateOfBirth || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    // Email validation for Gmail addresses
    if (!email.includes('@gmail.com')) {
      return res.status(400).json({ message: 'Email must be a valid Gmail address' });
    }

    // Check if the email is already registered
    const existing = await Student.findOne({ email });

    if (existing) {

      res.status(400).json({ message: 'Email Already Registered' });
    }



    // Create a new student record
    const student = await Student.create({ name, email, phone, department, semester, dateOfBirth, gender });
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error: error.message });
    next(error);
  }
});



// 2. GET - View all students results
router.get('/student', async (req, res) => {

  try {
    const students = await Student.find();
    res.status(200).json(students);

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

);

//3. GET - View a single student result by ID

router.get('/student/:id', async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);

    if (!students) {
      res.status(400).json({ message: 'Invalid Student' })
    }
    res.status(200).json(students);
  }

  catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
    
  }

});


  //4. PUT - Update a student result by ID
router.put('/student/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }  // new:true returns updated doc
    );

    if (!student)
      return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ message: 'Student updated successfully!', student });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

//5. DELETE - Delete a student result by ID
router.delete('/student/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student)
      return res.status(404).json({ message: 'Student not found' });

    res.status(200).json({ message: 'Student deleted successfully!'});
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;