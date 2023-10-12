import express from "express";

import * as postController from "../controllers/postController.js";

const router = express.Router();

// query parameter
router.get("/", postController.getPosts);
router.get("/details", postController.getPostsDetail);
router.post("/", postController.createPost);
router.post("/upload", postController.uploadImage);
router.post("/like/:postId", postController.likePost);
router.post("/unlike/:postId", postController.unlikePost);

export default router;
