import Movie from "../models/movie.model.js";
const takeAllMovies = async (req, res) => {
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
  res.json(movies);
};
const takeMovieData = async (req, res) => {
  const title = req.params.title;
  const movieData = await Movie.findOne({ slug: title });
  res.json(movieData);
};

const takeAllYears = async (req, res) => {
  const totalYears = await Movie.find(
    {},
    { _id: false, releaseYear: { _id: false }, releaseYear: true },
  );
  const finalData = totalYears
    .reduce((array, current) => {
      const tempNum = Math.floor(current.releaseYear / 10) * 10;
      if (!array.includes(tempNum)) {
        array.push(tempNum);
      }
      return array;
    }, [])
    .sort((a, b) => b - a);

  res.json(finalData);
};

const takeAllGenres = async (req, res) => {
  const totalGenres = await Movie.find({}, { genres: true });
  const finalGenres = totalGenres.reduce((array, current) => {
    current.genres.forEach((genre) => {
      if (!array.includes(genre)) {
        array.push(genre);
      }
    });
    return array;
  }, []);
  res.json(finalGenres);
};

const filters = async (req, res) => {
  const { genre, releaseYear } = req.query;
  if (genre && releaseYear) {
    const data = await Movie.find(
      { genres: genre, releaseYear: { $gte: releaseYear } },
      {
        _id: false,
        title: true,
        slug: true,
        type: true,
        genres: true,
        poster: true,
      },
    );
    res.json(data);
  } else if (genre) {
    const data = await Movie.find(
      { genres: genre },
      {
        _id: false,
        title: true,
        slug: true,
        type: true,
        genres: true,
        poster: true,
      },
    );
    res.json(data);
  } else {
    const data = await Movie.find({ releaseYear: { $gte: releaseYear } });
    res.json(data);
  }
};

export { takeAllMovies, takeMovieData, takeAllYears, takeAllGenres, filters };
