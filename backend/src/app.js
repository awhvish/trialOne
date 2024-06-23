import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

//routes
import signupRoutes from './routes/signup.routes.js';
import loginRoutes from './routes/login.routes.js';

//route declaration
app.use('/api/v1/signup',signupRoutes);
app.use('/api/v1/login',loginRoutes);


export default app;