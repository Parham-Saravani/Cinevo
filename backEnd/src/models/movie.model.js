import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String, required: true },

    type: { type: String, default: "movie" },

    poster: String,
    banner: String,
    video: String,
    overview: String,
    bannerDescription: String,

    releaseYear: Number,

    duration: String,
    runtime: String,

    rating: Number,
    ageRating: String,

    genres: [String],

    trailer: {
      type: String,
      default: null,
    },

    screenshots: { type: [String], default: null },

    director: String,

    cast: [
      {
        title: { type: String },
        image: { type: String },
      },
    ],

    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
