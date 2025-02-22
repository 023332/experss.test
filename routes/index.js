import  {Router} from "express";

import User from "./users.js";
import comments from "./comments.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("get");
})

router.use("/users", User);
router.use("/comments", comments);

export default router;