import express from "express";
import { 
    login, 
    logout, 
    register 
} from "../controllers/auth.js";

export const authRouter = express.Router();

authRouter.post("/register",register);
authRouter.post("/login",login);
authRouter.post("/logout",logout);