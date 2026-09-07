import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema({
  title: String,
  banner: String,
  slug: String,
  bannerDescription: String,
  releaseYear: String,
  genres: [String],
  rating: String,
  duration: String,
  type: String,
});

const Banner = mongoose.model("banners", bannerSchema);
export default Banner;
