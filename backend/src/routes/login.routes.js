import express from 'express';
import loginController from '../controllers/login.controllers.js';

const router = express.Router();

router.route('/').post(loginController);

export default router;