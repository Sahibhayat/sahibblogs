import { Router } from "express";
import {
  test,
  updatUser,
  deleteUser,
  signOut,
  getUsers,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = Router();

userRouter.route("/test").get(test);
userRouter.route("/update/:userId").put(verifyToken, updatUser);
userRouter.route("/delete/:userId").delete(verifyToken, deleteUser);
userRouter.route("/getusers").get(verifyToken, getUsers);
userRouter.route("/signout").post(signOut);
userRouter.route('/:userId').get(getUser)

export default userRouter;
