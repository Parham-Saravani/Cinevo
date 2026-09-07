import mongoose from "mongoose";
const serieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    type: {
      type: String,
      enum: ["series", "anime"],
      required: true,
    },

    poster: String,
    banner: String,

    overview: String,
    bannerDescription: String,
    duration: Number,
    releaseYear: Number,

    genres: [String],

    rating: Number,

    ageRating: String,

    runtime: String,

    director: String,

    cast: [
      {
        title: String,
        image: String,
      },
    ],

    trailer: {
      type: String,
      default: null,
    },
    screenshots: { type: [String], default: null },

    featured: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    seasons: [
      {
        _id: false,
        title: String,

        episodes: [
          {
            _id: false,

            title: String,
            releaseDate: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Serie = mongoose.model("Serie", serieSchema);
export default Serie;
