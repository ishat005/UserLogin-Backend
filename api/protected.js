import express from "express";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

/* This API endpoint provides a protected route for accessing a user's 
profile information. The route is secured using JSON Web Tokens (JWT) 
and requires authentication to access.*/
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

export default router;
