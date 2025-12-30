import mongoose from "mongoose";

export const connectDB = async()=>{
        try {
                mongoose.connect(process.env.MONGO_URL)
                console.log('the Data base is connected');
                
        } catch (error) {
            console.log(error);
            
        }
}