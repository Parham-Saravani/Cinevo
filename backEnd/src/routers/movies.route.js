import Router from "express";
import { takeAllMovies, takeMovieData ,  takeAllYears , takeAllGenres , filters} from "../controllers/movies.controller.js";
const router = Router();

router.get("/", takeAllMovies);
router.get("/year", takeAllYears)
router.get("/genre", takeAllGenres)
router.get('/filter' , filters);
router.get("/:title", takeMovieData);

export default router;