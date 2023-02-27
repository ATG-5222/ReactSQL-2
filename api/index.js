import express from "express";
import { authRouter } from "./routes/auth.js";
import { usersRouter } from "./routes/users.js";
import { postRouter } from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/posts",postRouter);

app.listen(8800,()=>{
    console.log("Connected to the backend")
});