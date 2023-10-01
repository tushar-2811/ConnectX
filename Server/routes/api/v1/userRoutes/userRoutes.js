import { Router } from "express";
import { loginController, signUpController } from "../../../../controllers/api/v1/userController.js";

const userRouter = Router();

// set Routes here for the App

// sign-up
userRouter.post('/signup' , signUpController);

// sign-in
userRouter.post('/login' , loginController);


export default userRouter;