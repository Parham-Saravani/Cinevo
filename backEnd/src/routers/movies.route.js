import Router from "express";
import {
  takeAllMovies,
  takeMovieData,
  takeAllYears,
  takeAllGenres,
  filters,
  registerNewMovie,
  removeMovie,
} from "../controllers/movies.controller.js";
const router = Router();

router.post("/", registerNewMovie);
router.get("/", takeAllMovies);
router.delete("/", removeMovie);
router.get("/year", takeAllYears);
router.get("/genre", takeAllGenres);
router.get("/filter", filters);
router.get("/:title", takeMovieData);

export default router;
