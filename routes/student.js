const express = require('express');
const router = express.Router();
const Student = require('../model/student');

router.post('/student', async (req, res) => {
  try {
    const { name, email, age, department } = req.body;

    if (!name || !email || !age || !department) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email.includes('@gmail.com')) {
      return res.status(400).json({ message: 'Email must be a valid Gmail address' });
    }

    const student = await Student.create({ name, email, age, department });
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error: error.message });
  }
});



// GET - Search student by email or return paginated list
router.get('/student', async (req, res) => {
  try { 
    
     const { email } = req.query;


     // If email query is provided, search for the student by email(Porjection)
    if (email) {
      const student = await Student.findOne(
        { email },
        { name: 1, department: 1, email: 1, _id: 0 }
      );

    res.status(200).json(students);
    }

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }


      //Pagination logic (if no email query is provided)
//    const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);
//     const skip = (page - 1) * limit;

//     const students = await Student.find().skip(skip).limit(limit);

    
  
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;