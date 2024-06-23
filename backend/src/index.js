import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/main.db.js';

dotenv.config({
    path:"./.env"
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

