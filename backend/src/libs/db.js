import mongoose from "mongoose"

export const connectDB=async()=>{
   try{
   const conn= await mongoose.connect(process.env.MONGODB_URI,{
      
      dbName:'chat_db'
   });
   console.log(`MongoDB connected: ${conn.connection.host}`);
   
   } catch(error){
        console.log(console.log("Error connecting to MongoDB:", error.message));
           
   }
};