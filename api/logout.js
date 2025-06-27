import express from "express";

const router = express.Router();

router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send({ message: "Error logging out" });
      } else {
        res.send({ message: "Logged out successfully" });
      }
    });
  } else {
    res.send({ message: "Logged out successfully" });
  }
});

export default router;
