import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB);
    }
    catch(err){
        console.log(`MongoDB connection error: ${err}`);
    }
    console.log('Connected to MongoDB', mongoose.connection.name);

}

export default connectDB;