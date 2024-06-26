import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'https://trial-one-three.vercel.app/', // Allow only your domain
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed headers
  }));
app.use(express.json());



//routes
import signupRoutes from './routes/signup.routes.js';
import loginRoutes from './routes/login.routes.js';
import playRoutes from './routes/play.routes.js';

//route declaration
app.use('/api/v1/signup',signupRoutes);
app.use('/api/v1/login',loginRoutes);
app.use('/api/v1/play',playRoutes);

app.get('/',(req,res)=>{
    res.send('Welcome to the server');
});

export default app;