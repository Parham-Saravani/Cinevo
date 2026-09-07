import Router from "express";
import {createNewBanner , takeAllBanners} from "../controllers/banner.controller.js"
const router = Router();

router.get("/", takeAllBanners)
router.get('/:slug', createNewBanner)

export default router;