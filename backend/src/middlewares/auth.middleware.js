import jwt from "jsonwebtoken"
import User from"../models/user.model.js";

export const protectRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt||req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({error: "unauthorized-No token provided"});

        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
       if(!decoded){
          return res.status(401).json({error: "INVALID TOKEN"});
       }
       const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({error:"User not found"});

        }
        req.user=user;
        next();

    } catch(error){
        console.log("Error in protectRoute middleware:",error.message);
        res.status(500).json({error:"Unauthorized-Invalid token"});
        
    }   
    }
