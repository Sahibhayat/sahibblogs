import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createPost,
  getPost,
  deletePost,
  updatePost
} from "../controllers/post.controller.js";

const postRoute = Router();

postRoute.route("/create").post(verifyToken, createPost);
postRoute.route("/getposts").get(getPost);
postRoute.route("/deletepost/:postId/:userId").delete(verifyToken, deletePost);
postRoute.route("/updatepost/:postId/:userId").put(verifyToken, updatePost);

export default postRoute;
