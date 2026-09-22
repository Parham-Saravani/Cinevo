import Router from "express";
import {
  takeAllSeries,
  takeSerie,
  takeAllYears,
  takeAllGenres,
  filters,
  removeSeries,
  updateSerie,
  registerNewSerie,
} from "../controllers/series.controller.js";

const router = Router();

router.post("/", registerNewSerie);
router.get("/", takeAllSeries);
router.get("/year", takeAllYears);
router.put("/", updateSerie);
router.delete("/", removeSeries);
router.get("/genre", takeAllGenres);
router.get("/filter", filters);
router.get("/:title", takeSerie);

export default router;
