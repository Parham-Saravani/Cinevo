import Router from "express";

import {
  getImageKitData,
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
  searchOnContent,
  tekeDashboardData,
  takeUserWatchlist,
  takeUserFavorites,
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
router.post("/watchlist", takeUserWatchlist);
router.post("/favorites", takeUserFavorites);
router.get("/dashboard/home", tekeDashboardData);
router.get("/imagekit", getImageKitData);
router.get("/similar/:slug", takeSimilarContent);
router.get("/search/:value", searchOnContent);
export default router;
