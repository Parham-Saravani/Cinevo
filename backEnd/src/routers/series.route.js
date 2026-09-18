import Router from "express";
import {
  takeAllSeries,
  takeSerie,
  takeAllYears,
  takeAllGenres,
  filters,
  removeSeries,
} from "../controllers/series.controller.js";

const router = Router();

router.get("/", takeAllSeries);
router.get("/year", takeAllYears);
router.delete("/", removeSeries);
router.get("/genre", takeAllGenres);
router.get("/filter", filters);
router.get("/:title", takeSerie);

export default router;
