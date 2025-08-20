
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth_route.js"



import {connectDB} from "./libs/db.js"

dotenv.config();


const app=express();

const PORT=process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running in PORT :${PORT}`);
    connectDB()  
});