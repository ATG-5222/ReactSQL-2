import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req,res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM user WHERE email = ? OR username = ?";
    db.query(q,[req.body.email,req.body.username], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists");
        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ];
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created");
        })
    });
};

export const login = (req,res) => {
    //CHECK USER
    const q = "SELECT * FROM user WHERE username = ?";
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.json(err);
        if(data.lenght===0) return res.status(404).json("User not found");
        //CHECK PASSWORD
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );
        if(!isPasswordCorrect) return res.status(404).json("Wrong username or password");
        //Generate jsonwebtoken
        const token = jwt.sign({id:data[0].id_user},"jwtkey");
        const { password,...other } = data[0];
        res.cookie("accessToken",token,{
            httpOnly:true
        }).status(200).json(other);
    });
};

export const logout = (req,res) => {
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true,
    }).status(200).json("User has been logged out");
};