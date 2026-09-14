import { FaHeart, FaPlay, FaTrash } from "react-icons/fa6";

function UserFavorites() {

  const favorites = [
    {
      id: 1,
      title: "Breaking Bad",
      type: "Series",
      year: 2008,
      rating: 9.5,
      poster: "/images/breaking-bad.jpg",
      genres: ["Crime", "Drama"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      type: "Movie",
      year: 2008,
      rating: 9.0,
      poster: "/images/dark-knight.jpg",
      genres: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Interstellar",
      type: "Movie",
      year: 2014,
      rating: 8.7,
      poster: "/images/interstellar.jpg",
      genres: ["Sci-Fi", "Drama"],
    },
  ];

  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">Favorites</h1>

        <p className="mt-1 text-sm text-text-secondary">
          Your favorite movies and series in one place.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {favorites.map((movie) => (
          <article
            key={movie.id}
            className="flex gap-4 rounded-xl border border-input-border/40 bg-input-bg/40 p-4"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-32 w-22 rounded-lg object-cover"
            />

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold">{movie.title}</h2>

                  <p className="mt-1 text-xs text-text-secondary">
                    {movie.type} • {movie.year}
                  </p>
                </div>

                <FaHeart className="shrink-0 text-primary" />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-md bg-input-border/30 px-2 py-1 text-[11px] text-text-secondary"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-xs text-text-secondary">
                  ★ {movie.rating}
                </span>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs">
                    <FaPlay />
                    Watch
                  </button>

                  <button className="rounded-lg border border-input-border/50 px-3 py-2 text-xs text-text-secondary hover:text-red-400">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



export default UserFavorites