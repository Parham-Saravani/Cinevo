import Router from "express";
import {
  registerNewUser,
  loginOperation,
  logoutHandler,
  takeUserData,
  takeAllUsers,
} from "../controllers/user.controller.js";
const router = Router();

router.get("/", takeAllUsers);
router.post("/", registerNewUser);
router.post("/login", loginOperation);
router.post("/signout", logoutHandler);
router.post("/me", takeUserData);
export default router;
