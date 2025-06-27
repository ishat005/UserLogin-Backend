import express from "express";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user
  });
});

export default router;