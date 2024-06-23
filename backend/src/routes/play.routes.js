//protected route
import protect from "../middlewares/protect.middleware.js";
import express from "express";

const router = express.Router();

router.route("/").post( protect, async (req, res) => {
  return res.status(202).json({ message: "You are authorized to play" });
});

export default router;