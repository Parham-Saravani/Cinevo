import Serie from "../models/series.model.js";
import Movie from "../models/movie.model.js";
import User from "../models/user.model.js";
import Comment from "../models/comment.model.js";
import crypto from "crypto";

const getImageKitData = async (req, res) => {
  const test = process.env.IMAGEKEY_PRIVATE_KEY;
  const token = crypto.randomUUID();
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  const signature = crypto
    .createHmac("sha1", test)
    .update(token + expire)
    .digest("hex");
  res.json({
    token,
    expire,
    signature,
    publicKey: process.env.IMAGEKEY_PUBLIC_KEY,
  });
};
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

  const totalGenres = await new Set([
    ...allMovies.reduce((array, current) => {
      current.genres.forEach((item) => {
        if (!array.includes(item)) {
          array.push(item);
        }
      });
      return array;
    }, []),
    ...allSeries.reduce((array, current) => {
      current.genres.forEach((item) => {
        if (!array.includes(item)) {
          array.push(item);
        }
      });
      return array;
    }, []),
  ]);
  res.json([...totalGenres]);
};
const takeAllTypes = async (req, res) => {
  const moviesYear = await Movie.find({}, { type: true });
  const serieYear = await Serie.find({}, { type: true });
  const finalData = new Set([
    ...serieYear.map((item) => item.type),
    ...moviesYear.map((item) => item.type),
  ]);
  res.json([...finalData]);
};

const takeAllContent = async (req, res) => {
  const series = await Serie.find(
    {},
    {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      bannerDescription: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      seasons: true,
      director: true,
      featured: true,
      trending: true,
    },
  );
  const movies = await Movie.find(
    {},
    {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      director: true,
      featured: true,
      trending: true,
    },
  );
  res.json([...movies, ...series]);
};
const takeAllYears = async (req, res) => {
  const moviesYear = await Movie.find({}, { releaseYear: true });
  const serieYear = await Serie.find({}, { releaseYear: true });

  const finalData = new Set([
    ...moviesYear.map((item) => {
      if (item) {
        return Math.floor(item.releaseYear / 10) * 10;
      }
    }),
    ...moviesYear.map((item) => {
      if (item) {
        return Math.floor(item.releaseYear / 10) * 10;
      }
    }),
  ]);
  res.json([...finalData]);
};
const filtering = async (req, res) => {
  const { genre, year, type } = req.body;
  const content = type === "series" ? Serie : Movie;
  if (!year && !genre && !type) {
    const movies = await Movie.find(
      {},
      {
        title: true,
        slug: true,
        type: true,
        genres: true,
        poster: true,
        bannerDescription: true,
        rating: true,
        bannerDescription: true,
        releaseYear: true,
        duration: true,
        ageRating: true,
        seasons: true,
        director: true,
        featured: true,
        trending: true,
      },
    );
    const series = await Serie.find(
      {},
      {
        title: true,
        slug: true,
        type: true,
        genres: true,
        poster: true,
        bannerDescription: true,
        rating: true,
        bannerDescription: true,
        releaseYear: true,
        duration: true,
        ageRating: true,
        seasons: true,
        director: true,
        featured: true,
        trending: true,
      },
    );
    return res.json([...movies, ...series]);
  }
  if (!year && !genre) {
    const data = await content.find(
      {},
      {
        title: true,
        slug: true,
        type: true,
        genres: true,
        poster: true,
        bannerDescription: true,
        rating: true,
        bannerDescription: true,
        releaseYear: true,
        duration: true,
        ageRating: true,
        seasons: true,
        director: true,
        featured: true,
        trending: true,
      },
    );
    return res.json(data);
  }
  const filters = {};
  if (year) filters.releaseYear = { $gte: Number(year) };
  if (genre) filters.genres = { $in: genre };
  if (!type) {
    const movies = await Movie.find(filters, {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      bannerDescription: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      seasons: true,
      director: true,
      featured: true,
      trending: true,
    });
    const series = await Serie.find(filters, {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      bannerDescription: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      seasons: true,
      director: true,
      featured: true,
      trending: true,
    });
    return res.json([...movies, ...series]);
  }

  const data = await content.find(filters, {
    title: true,
    slug: true,
    type: true,
    genres: true,
    poster: true,
    bannerDescription: true,
    rating: true,
    bannerDescription: true,
    releaseYear: true,
    duration: true,
    ageRating: true,
    seasons: true,
    director: true,
    featured: true,
    trending: true,
  });
  return res.json(data);
};
const searchOnContent = async (req, res) => {
  const value = req.params.value;
  const movies = await Movie.find(
    { title: { $regex: value, $options: "i" } },
    {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      bannerDescription: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      seasons: true,
      director: true,
      featured: true,
      trending: true,
    },
  );
  const series = await Serie.find(
    { title: { $regex: value, $options: "i" } },
    {
      title: true,
      slug: true,
      type: true,
      genres: true,
      poster: true,
      bannerDescription: true,
      rating: true,
      bannerDescription: true,
      releaseYear: true,
      duration: true,
      ageRating: true,
      seasons: true,
      director: true,
      featured: true,
      trending: true,
    },
  );
  res.json([...movies, ...series]);
};
const tekeDashboardData = async (req, res) => {
  const moviesCount = await Movie.countDocuments({});
  const seriesCount = await Serie.countDocuments({});
  const usersCount = await User.countDocuments({});
  const commentsCount = await Comment.countDocuments({});
  const lastMovies = await Movie.find({}).sort({ createdAt: -1 }).limit(5);
  const lastSeries = await Serie.find({}).sort({ createdAt: -1 }).limit(5);
  const lastUsers = await User.find({}).sort({ createdAt: -1 }).limit(5);
  res.json({
    stats: {
      moviesCount,
      seriesCount,
      usersCount,
      commentsCount,
    },
    recentData: {
      lastMovies,
      lastSeries,
      lastUsers,
    },
  });
};
export {
  getImageKitData,
  takeSimilarContent,
  takeTrendContent,
  takeNewContent,
  takePopularContent,
  takeRecommendedContent,
  takeAllGenres,
  takeAllContent,
  takeAllTypes,
  takeAllYears,
  filtering,
  searchOnContent,
  tekeDashboardData,
};
