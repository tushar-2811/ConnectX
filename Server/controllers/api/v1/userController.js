import User from "../../../models/userSchema.js"
import {comparePassword, hashPassword }from '../../../config/cryptPassword.js'
import JWT from "jsonwebtoken";
// sign-up controller

export const signUpController = async (req , res) => {

    try {
        const {name , email , phoneNo  , userName , password , yearOfBirth} = req.body;
        
        console.log(req.body);
        console.log(name , email , phoneNo , userName , password , yearOfBirth);
        if(!name || !email || !phoneNo || !userName || !password || !yearOfBirth) {
            return res.status(401).json({
                ok : false,
                message : "please enter complete details"
            })
        }

        const existingUserBasedOnEmail = await User.findOne({email : email});
        if(existingUserBasedOnEmail) {
            return res.status(400).json({
                ok : false,
                message : "user already exists with this email"
            })
        }

        const existingUserBaseOnPhone = await User.findOne({phoneNo : phoneNo});
        if(existingUserBaseOnPhone) {
            return res.status(401).json({
                ok : false,
                message : "user alreay exist with this phone NO"
            })
        } 
        
        const existingUserBasedOnUserName = await User.findOne({userName : userName});
        if(existingUserBasedOnUserName) {
            return res.status(401).json({
                ok : false,
                message : "userName already taken , please choose another"
            })
        }

        // now first hash password before storing it in database
        const newPassword = await hashPassword(password);
        console.log(newPassword)

        const newUser = await User.create({name , email , phoneNo , yearOfBirth , userName , password : newPassword});

        if(newUser) {
            return res.status(201).json({
                ok : true, 
                message : "new user created",
                user : newUser
            })
        }
        else{
            return res.status(500).json({
                ok : false,
                message : "error in creating new user",
                error
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            message : "error in sign-up",
            error : error
        })
    }
}



// log-in

export const loginController = async (req,res) => {
    try {
        const {userName , password} = req.body;

        if(!userName || !password) {
            return res.status(500).json({
                ok : false,
                message : "Enter complete details"
            })
        }

        const existingUser = await User.findOne({userName : userName});
        if(!existingUser) {
            return res.status(501).send({
                ok : false,
                message : "no user exist by this username" 
            })
        }

        const doPasswordMatch = await comparePassword(password,existingUser.password);
        if(!doPasswordMatch) {
            return res.status(500).json({
                ok : false,
                message : "please enter correct password"
            })
        }

        const token = JWT.sign({_id : existingUser._id} , process.env.JWT_KEY , {expiresIn : "24h"});

        return res.status(201).json({
            ok : true,
            userName : existingUser.userName,
            token : token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok : false,
            message : "error in logging in"
        })
    }
}