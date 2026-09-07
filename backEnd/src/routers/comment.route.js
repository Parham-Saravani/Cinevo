import Router from "express";
import { registerNewComment , takeContentComments} from "../controllers/comment.controller.js";
const router = Router();

router.post("/", registerNewComment);
router.get("/:slug", takeContentComments);

export default router;
