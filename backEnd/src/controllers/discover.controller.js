import Serie from "../models/series.model.js";
import Movie from "../models/movie.model.js";
const takeSimilarContent = async (req, res) => {
  const dataSlug = req.params.slug;
  const [movie, series] = await Promise.all([
    Serie.findOne({ slug: dataSlug }),
    Movie.findOne({ slug: dataSlug }),
  ]);
  if (!movie && !series) {
    res.json({ message: "NOT_FOUND" });
  }
  const current = movie || series;
  const [similaMovies, similarSeries] = await Promise.all([
    Serie.find({
      _id: { $ne: current._id },
      genres: { $in: current.genres },
    }).limit(5),
    Movie.find({
      _id: { $ne: current._id },
      genres: { $in: current.genres },
    }).limit(5),
  ]);
  res.json([...similaMovies, ...similarSeries]);
};

const takeTrendContent = async (req, res) => {
  const totalTrendSeries = await Serie.find(
    { trending: true },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  const totalTrendMovies = await Movie.find(
    { trending: true },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  res.json([...totalTrendMovies, ...totalTrendSeries]);
};
const takeNewContent = async (req, res) => {
  const totalPopularSeries = await Serie.find(
    { releaseYear: { $gte: 2025 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  const totalPopularMovies = await Movie.find(
    { releaseYear: { $gte: 2025 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  res.json([...totalPopularSeries, ...totalPopularMovies]);
};

const takePopularContent = async (req, res) => {
  const totalPopularSeries = await Serie.find(
    { rating: { $gte: 8 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  const totalPopularMovies = await Movie.find(
    { rating: { $gte: 8 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  res.json([...totalPopularSeries, ...totalPopularMovies]);
};
const takeRecommendedContent = async (req, res) => {
  const recommendSeries = await Serie.find(
    { rating: { $gte: 9 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  const recommendMovies = await Movie.find(
    { rating: { $gte: 9 } },
    {
      _id: true,
      title: true,
      slug: true,
      genres: true,
      poster: true,
      type: true,
    },
  ).limit(5);
  res.json([...recommendSeries, ...recommendMovies]);
};

const takeAllGenres = async (req, res) => {
  const allMovies = await Movie.find({}, { _id: false, genres: true });
  const allSeries = await Serie.find({}, { _id: false, genres: true });

  const moviesGenres = allMovies.reduce((array, current) => {
    current.genres.forEach((item) => {
      if (!array.includes(item)) {
        array.push(item);
      }
    });
    return array;
  }, []);

  const seriesGenres = allSeries.reduce((array, current) => {
    current.genres.forEach((item) => {
      if (!array.includes(item)) {
        array.push(item);
      }
    });
    return array;
  }, []);
  const totalGenres = await new Set([...seriesGenres, ...moviesGenres]);
  const finalData = [...totalGenres]
  res.json(finalData);
};

export {
  takeSimilarContent,
  takeTrendContent,
  takeNewContent,
  takePopularContent,
  takeRecommendedContent,
  takeAllGenres,
};
