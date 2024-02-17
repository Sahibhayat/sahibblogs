import express from "express";
import { Router } from "express";
import { createComment , getPostComeents, likeComment, editComment, deleteComment,getComments } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const commentRouter = Router();

commentRouter.route("/create").post(verifyToken, createComment);
commentRouter.route("/getPostComments/:postId").get(getPostComeents);
commentRouter.route("/likeComment/:commentId").put(verifyToken, likeComment);
commentRouter.route("/editComment/:commentId").put(verifyToken, editComment);
commentRouter.route("/deleteComment/:commentId").delete(verifyToken, deleteComment);
commentRouter.route("/getcomments").get(verifyToken, getComments);

export default commentRouter;