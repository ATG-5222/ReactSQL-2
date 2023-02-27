import express from "express";
import { addPost } from "../controllers/post.js";

export const postRouter = express.Router();

postRouter.get("/test",addPost);