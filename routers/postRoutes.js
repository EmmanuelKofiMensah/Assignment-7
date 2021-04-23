import express from "express";
const router = express.Router();
import * as postController from "../controllers/postController";

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost);

router
  .route("/:postId")
  .get(postController.getSinglePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

export default router;
