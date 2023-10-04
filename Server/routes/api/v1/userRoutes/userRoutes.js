import { Router } from "express";
import { getUserDataController, loginController, signUpController, updateInformationController } from "../../../../controllers/api/v1/userController.js";
import { isAuthenticated } from "../../../../middlewares/isAuthenticated.js";

const userRouter = Router();

// set Routes here for the App

// sign-up
userRouter.post('/signup' , signUpController);

// sign-in
userRouter.post('/login' , loginController);

// get information
userRouter.get('/profile' , isAuthenticated , getUserDataController );

// to update information
userRouter.post('/update' , isAuthenticated , updateInformationController);


export default userRouter;