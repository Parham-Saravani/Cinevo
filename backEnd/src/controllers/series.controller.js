import Serie from "../models/series.model.js";
const takeAllSeries = async (req, res) => {
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
  res.json(series);
};

const takeSerie = async (req, res) => {
  const title = req.params.title;
  try {
    const serieData = await Serie.findOne({ slug: title });
    if(!serieData) throw new Error('NOT_FOUND')
    res.json(serieData);
  } catch (error) {
    res.json({ message: error.message});
  }
};

const takeAllYears = async (req, res) => {
  const totalYears = await Serie.find(
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
  const totalGenres = await Serie.find({}, { genres: true });
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
    const data = await Serie.find(
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
    const data = await Serie.find(
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
    const data = await Serie.find({ releaseYear: { $gte: releaseYear } });
    res.json(data);
  }
};

export { takeAllSeries, takeSerie, takeAllYears, takeAllGenres, filters };
