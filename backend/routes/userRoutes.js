import express from "express";
import { signin, signup } from "../controllers/userController.js";
const userRoute=express.Router()

userRoute.post('/signup',signup)
userRoute.post('/sigin',signin)

export default userRoute