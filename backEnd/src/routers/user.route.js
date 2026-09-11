import Router from "express";
import {
  registerNewUser,
  loginOperation,
  logoutHandler,
  takeUserData,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/", registerNewUser);
router.post("/login", loginOperation);
router.post("/signout", logoutHandler);
router.post("/me", takeUserData);
export default router;
