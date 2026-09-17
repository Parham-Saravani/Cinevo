import Router from "express";
import {
  registerNewComment,
  takeContentComments,
  takeAllCommnets,
} from "../controllers/comment.controller.js";
const router = Router();

router.post("/", registerNewComment);
router.get("/", takeAllCommnets);
router.get("/:slug", takeContentComments);

export default router;
