import Router from "express";
import {
  takeSimilarContent,
  takeTrendContent,
  takeAllContent,
  takeNewContent,
  takePopularContent,
  takeRecommendedContent,
  takeAllTypes,
  takeAllYears,
  takeAllGenres,
  filtering,
} from "../controllers/discover.controller.js";
const router = Router();

router.post("/filter", filtering);
router.get("/trending", takeTrendContent);
router.get("/newRelease", takeNewContent);
router.get("/popular", takePopularContent);
router.get("/recommend", takeRecommendedContent);
router.get("/genre", takeAllGenres);
router.get("/types", takeAllTypes);
router.get("/year", takeAllYears);
router.get("/all", takeAllContent);
router.get("/similar/:slug", takeSimilarContent);
export default router;
