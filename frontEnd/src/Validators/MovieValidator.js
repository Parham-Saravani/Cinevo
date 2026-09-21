import * as z from "zod";

const MovieValidator = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(32, "Title cannot exceed 32 characters"),

  releaseYear: z.coerce
    .number()
    .min(1900, "Release year must be after 1900")
    .max(new Date().getFullYear(), "Release year cannot be in the future"),

  director: z.string().min(1, "Director is required"),

  duration: z.coerce
    .number()
    .min(1, "Duration must be at least 1 minute")
    .max(600, "Duration cannot exceed 600 minutes"),

  rating: z.coerce
    .number()
    .min(0, "Rating cannot be less than 0")
    .max(10, "Rating cannot be greater than 10"),

  ageRating: z.string().min(1, "Age rating is required"),

  genres: z
    .array(z.object({ id: z.string(), title: z.string() }))
    .min(1, "At least one genre is required"),

  totalScreenshots: z
    .array(z.object({ id: z.string(), file: z.file() }))
    .min(1, "At least one screenshot is required")
    .max(4, "Maximum 4 screenshots are allowed"),

  bannerDescription: z
    .string()
    .min(10, "Banner description must be at least 10 characters")
    .max(200, "Banner description cannot exceed 100 characters"),

  overview: z
    .string()
    .min(20, "Overview must be at least 20 characters")
    .max(700, "Overview cannot exceed 700 characters"),

  isFeatured: z.boolean(),

  isTrend: z.boolean(),

  posterFile: z.file(),
  bannerFile: z.file(),
});

export default MovieValidator;
