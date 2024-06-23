import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('login API working successfully');
});

export default router;