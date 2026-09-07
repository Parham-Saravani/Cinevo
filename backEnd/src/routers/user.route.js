import Router from "express";
import { registerNewUser , loginOperation , logoutHandler} from "../controllers/user.controller.js";
const router = Router();

router.post("/", registerNewUser);
router.post("/login", loginOperation);
router.post('/signout' , logoutHandler)

export default router;