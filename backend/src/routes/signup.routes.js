import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.models.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hi");
});


export default router;