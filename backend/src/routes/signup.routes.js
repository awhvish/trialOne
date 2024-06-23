import express from "express";
import validateSignupInput from "../middlewares/signup.middleware.js";
import signupController from "../controllers/signup.controllers.js";

const router = express.Router();

// POST route for signup
router.route("/").post(validateSignupInput, signupController);

export default router;
