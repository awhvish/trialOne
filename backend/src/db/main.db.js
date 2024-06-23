import mongoose from "mongoose";
import User from "../models/user.models.js";

async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/userdb');
    }
    catch(err){
        console.log(`MongoDB connection error: ${err}`);
    }
    console.log('Connected to MongoDB', mongoose.connection.name);

}

export default connectDB;