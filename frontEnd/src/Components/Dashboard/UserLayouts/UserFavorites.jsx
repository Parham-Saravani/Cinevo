import { FaHeart, FaPlay, FaTrash, FaStar } from "react-icons/fa6";
import { Link } from "react-router";

function UserFavorites() {
  const favorites = [
    {
      id: 1,
      title: "Breaking Bad",
      type: "Series",
      year: 2008,
      rating: 9.5,
      poster: "https://ik.imagekit.io/Cinevo/Posters/ThePassionOfTheChrist.jpg",
      genres: ["Crime", "Drama"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      type: "Movie",
      year: 2008,
      rating: 9.0,
      poster: "https://ik.imagekit.io/Cinevo/Posters/ThePassionOfTheChrist.jpg",
      genres: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Interstellar",
      type: "Movie",
      year: 2014,
      rating: 8.7,
      poster: "https://ik.imagekit.io/Cinevo/Posters/ThePassionOfTheChrist.jpg",
      genres: ["Sci-Fi", "Drama"],
    },
  ];

  return (
    <section className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
            Favorites
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            Your favorite movies and series collection.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Movies</p>
            <p className="mt-1 text-xl font-bold text-text-primary">14</p>
          </div>

          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Series</p>
            <p className="mt-1 text-xl font-bold text-text-primary">10</p>
          </div>

          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Total</p>
            <p className="mt-1 text-xl font-bold text-text-primary">24</p>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="rounded-2xl bg-input-bg p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search favorites..."
            className="h-11 w-full lg:max-w-sm rounded-xl border border-input-border bg-bg-primary px-4 text-text-primary outline-hidden"
          />

          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-cta-primary px-4 py-2 text-sm text-white">
              All
            </button>

            <button className="rounded-lg border border-input-border px-4 py-2 text-sm text-text-secondary">
              Movies
            </button>

            <button className="rounded-lg border border-input-border px-4 py-2 text-sm text-text-secondary">
              Series
            </button>
          </div>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-5 gap-4">
        {favorites.map((movie) => (
          <article
            key={movie.id}
            className="col-span-1 group overflow-hidden rounded-2xl bg-input-bg"
          >
            <div className="relative overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  to={`/movie/the-passion-of-the-christ`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
                >
                  <FaPlay />
                </Link>
              </div>

              <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60">
                <FaHeart className="text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="line-clamp-1 font-semibold text-text-primary">
                  {movie.title}
                </h2>

                <span className="text-xs text-text-secondary">
                  {movie.year}
                </span>
              </div>

              <p className="mt-1 text-xs text-text-secondary">{movie.type}</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {movie.genres.slice(0, 2).map((genre) => (
                  <span
                    key={genre}
                    className="rounded-md bg-bg-primary px-2 py-1 text-[10px] text-text-secondary"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm flex items-center gap-1 rounded-md bg-yellow-500/20 px-2 py-1 text-yellow-500">
                  <FaStar />
                  {movie.rating}
                </span>

                <button className="rounded-lg border border-input-border px-2 py-2 text-text-secondary transition-colors hover:border-red-500 hover:text-red-500">
                  <FaTrash />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UserFavorites;
