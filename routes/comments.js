import  {Router} from "express";
import controller from "../controllers/comments.controller.js";

const router = Router();

router.post("/list",controller.getCommentsList)
router.post("/create",controller.createComment)

export default router;