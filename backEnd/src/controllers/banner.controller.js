import Serie from "../models/series.model.js";
import Movie from "../models/movie.model.js";
import Banner from "../models/banner.model.js";

const createNewBanner = async (req, res) => {
  const currentSlug = req.params.slug;
  try {
    const current =
      (await Serie.findOne(
        { slug: currentSlug },
        {
          _id: false,
          title: true,
          banner: true,
          slug: true,
          bannerDescription: true,
          releaseYear: true,
          genres: true,
          rating: true,
          duration: true,
          type: true,
        },
      )) ||
      (await Movie.findOne(
        { slug: currentSlug },
        {
          _id: false,
          title: true,
          banner: true,
          slug: true,
          bannerDescription: true,
          releaseYear: true,
          genres: true,
          rating: true,
          duration: true,
          type: true,
        },
      ));

    await Banner.create({
      title: current.title,
      banner: current.banner,
      slug: current.slug,
      bannerDescription: current.bannerDescription,
      releaseYear: current.releaseYear,
      genres: current.genres,
      rating: current.rating,
      duration: current.duration,
      type: current.type,
    });
    res.json({ message: "CREATED" });
  } catch (error) {
    console.log(error);
    res.json({ message: "NOT_CREATED" });
  }
};
const takeAllBanners = async (req, res) => {
  try {
    const totalBanners = await Banner.find();
    res.json(totalBanners);
  } catch (error) {
    res.json({ message: "NOT_FOUND" });
  }
};

export { createNewBanner, takeAllBanners };
