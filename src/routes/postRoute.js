import express from "express";

import * as postController from "../controllers/postController.js";

const router = express.Router();

// query parameter
router.get("/", postController.getPosts);
router.post("/", postController.createPost);


export default router;
