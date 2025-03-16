import mongoose from "mongoose";

export const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected sucessfully");
    } catch(error){
        console.error(error);
    }    
};
