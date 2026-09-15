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
    <section className="animate-fadeIn">
      <div>
        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
          Favorites
        </h1>

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
              className="h-34 w-25 rounded-lg object-cover"
            />

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-text-primary">
                    {movie.title}
                  </h2>

                  <p className="mt-1 text-xs text-text-secondary">
                    {movie.type} • {movie.year}
                  </p>
                </div>

                <span className="bg-red-500/10 rounded-md w-9 h-8.5 flex items-center justify-center">
                  <FaHeart className="text-red-600 text-primary" />
                </span>
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
                <span className="flex items-center bg-yellow-500/20 text-[13px] text-yellow-600 rounded-md px-2 py-1">
                  <FaStar className="text-[13px] mr-1" /> {movie.rating}
                </span>

                <div className="flex gap-2">
                  <Link to={`/movie/the-passion-of-the-christ`} className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs border border-input-border/50 text-text-secondary cursor-pointer hover:text-text-secondary/70 hover:border-input-border/70 transition-colors duration-300">
                    <FaPlay />
                    Watch
                  </Link>

                  <button className="rounded-lg border border-input-border/50 px-3 py-2 text-xs text-text-secondary hover:text-red-600 hover:border-red-600 transition-colors duration-200 cursor-pointer">
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

export default UserFavorites;
