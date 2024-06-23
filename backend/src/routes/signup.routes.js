// Import necessary modules
import express from "express";
import User from "../models/user.models.js"; // Adjust the path as needed

// Create an Express router
const router = express.Router();

// Middleware to validate signup input
const validateSignupInput = (req, res, next) => {
  const { fullName, username, email, password } = req.body;
  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // Add more validation logic as needed
  next();
};

// POST route for signup
router.route("/").post(validateSignupInput, async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (existingUser)
      return res.status(406).json({ error: "User already exists" });
    else {
      const newUser = new User({
        fullName: fullName,
        username: username,
        email: email,
        password: password,
      });
      await newUser.save();
      res.status(201).json({ message: "User created" });
    }
  } catch (error) {
    console.log("Error creating user: ", error);
  }
});

export default router;
