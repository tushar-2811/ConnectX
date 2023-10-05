import User from "../../../models/userSchema"
import { comparePassword, hashPassword } from '../../../config/cryptPassword'
import JWT from "jsonwebtoken";
import { Request , Response } from "express";
// sign-up controller

export const signUpController = async (req, res) => {

    try {
        const { name, email, phoneNo, userName, password } = req.body;

        console.log(req.body);

        console.log(name, email, phoneNo, userName, password);
        if (!name || !email || !phoneNo || !userName || !password) {
            return res.status(401).json({
                ok: false,
                message: "please enter complete details"
            })
        }

        const existingUserBasedOnEmail = await User.findOne({ email: email });
        if (existingUserBasedOnEmail) {
            return res.status(400).json({
                ok: false,
                message: "user already exists with this email"
            })
        }

        const existingUserBaseOnPhone = await User.findOne({ phoneNo: phoneNo });
        if (existingUserBaseOnPhone) {
            return res.status(401).json({
                ok: false,
                message: "user alreay exist with this phone NO"
            })
        }

        const existingUserBasedOnUserName = await User.findOne({ userName: userName });
        if (existingUserBasedOnUserName) {
            return res.status(401).json({
                ok: false,
                message: "userName already taken , please choose another"
            })
        }

        // now first hash password before storing it in database
        const newPassword = await hashPassword(password);
        console.log(newPassword)

        const newUser = await User.create({ name, email, phoneNo, userName, password: newPassword, yearOfBirth: 2001 });

        if (newUser) {
            return res.status(201).json({
                ok: true,
                message: "new user created",
                user: newUser
            })
        }
        else {
            return res.status(500).json({
                ok: false,
                message: "error in creating new user",
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "error in sign-up",
            error: error
        })
    }
}



// log-in

export const loginController = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(500).json({
                ok: false,
                message: "Enter complete details"
            })
        }

        const existingUser = await User.findOne({ userName: userName });
        if (!existingUser) {
            return res.status(501).send({
                ok: false,
                message: "no user exist by this username"
            })
        }

        const doPasswordMatch = await comparePassword(password, existingUser.password);
        if (!doPasswordMatch) {
            return res.status(500).json({
                ok: false,
                message: "please enter correct password"
            })
        }

        const token = JWT.sign({ id: existingUser._id }, process.env.JWT_KEY, { expiresIn: "24h" });

        return res.status(201).json({
            ok: true,
            userName: existingUser.userName,
            token: token
        })

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            message: "error in logging in"
        })
    }
}


// get user data
export const getUserDataController = async (req:Request, res:Response) => {
    try {
        const userId = req.headers.userId;

        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(401).json({
                message: "user not found",
            })
        }

        return res.status(201).json({
            ok: true,
            message: "user found",
            user: existingUser
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'error in getting user information',
            error
        })
    }
}


// to update information
export const updateInformationController = async (req, res) => {
    try {
        const userId = req.headers.userId;
        const { college, course, gender, bodyCount, height, isSmoker, isDrinker, inRelationship } = req.body;

        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(401).json({
                message: "user not found",
            })
        }

        existingUser.college = college;
        existingUser.course = course;
        existingUser.gender = gender;
        existingUser.bodyCount = bodyCount;
        existingUser.height = height;
        existingUser.isSmoker = isSmoker;
        existingUser.isDrinker = isDrinker;
        existingUser.inRelationship = inRelationship;

        // Save the updated user to the database
        const updatedUser = await existingUser.save();

        return res.status(201).json({
            ok: true,
            user: updatedUser
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error
        })
    }
}