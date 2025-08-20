import { protectRoute } from "../middlewares/auth.middleware.js";

import express from "express"
const router=express.Router();
import {login,logout,signup,deleteAccount,updateProfile,checkAuth} from "../controllers/auth.controller.js"

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.delete('/delete-account', protectRoute, deleteAccount);

router.put("/update-profile",protectRoute,updateProfile);


router.get("/check",protectRoute,checkAuth)

export default router
