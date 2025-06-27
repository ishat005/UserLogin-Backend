import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).send({ message: "All fields are required" });
    }
    
    const user = new User({ 
      firstName, 
      lastName, 
      email, 
      username, 
      password 
    });
    
    await user.save();
    res.send({ message: "Registered successfully", user: { username, email } });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ message: "Username or email already exists" });
    } else if (error.name === 'ValidationError') {
      res.status(400).send({ message: error.message });
    } else {
      res.status(500).send({ message: "Error registering user" });
    }
  }
});

export default router;
