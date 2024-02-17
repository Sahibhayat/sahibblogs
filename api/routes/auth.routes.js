import { Router } from "express";
import { signin, signup, google } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.route('/signup').post(signup);
authRouter.route('/signin').post(signin);
authRouter.route('/google').post(google);

export default authRouter;