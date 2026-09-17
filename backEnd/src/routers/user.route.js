import Router from "express";
import {
  registerNewUser,
  loginOperation,
  logoutHandler,
  takeUserData,
  takeAllUsers,
  updateUserData,
} from "../controllers/user.controller.js";
const router = Router();

router.post("/", registerNewUser);
router.get("/", takeAllUsers);
router.post("/update", updateUserData);
router.post("/login", loginOperation);
router.post("/signout", logoutHandler);
router.post("/me", takeUserData);
export default router;
