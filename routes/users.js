import  {Router} from "express";

import controller from "../controllers/users.controller.js";

const router = Router();

router.post("/login", controller.login);
router.post("/register",controller.register );

export default router;