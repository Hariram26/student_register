const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Register Step 1: Create a POST route for registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'Registered successfully!' });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

 // Login Step 1: Create a POST route for login


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check fields are present
    if (!email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    // 2. Find user by email in MongoDB
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Invalid email or password' });

    // 3. Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid email or password' });

    // 4. Create JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 5. Send token + user details back
    res.status(200).json({
      message: 'Login successful!',
      token,
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;