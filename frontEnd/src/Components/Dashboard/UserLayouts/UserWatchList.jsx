import { FaPlay, FaTrash , FaStar } from "react-icons/fa6";
import { Link } from "react-router";

function UserWatchList() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      type: "Movie",
      year: 2014,
      rating: 8.7,
      poster: "https://ik.imagekit.io/Cinevo/Posters/TheDarkKnight.jpg",
    },
    {
      id: 1,
      title: "Interstellar",
      type: "Movie",
      year: 2014,
      rating: 8.7,
      poster: "https://ik.imagekit.io/Cinevo/Posters/TheDarkKnight.jpg",
    },
    {
      id: 2,
      title: "The Last of Us",
      type: "Series",
      year: 2023,
      rating: 8.8,
      poster: "https://ik.imagekit.io/Cinevo/Posters/TheDarkKnight.jpg",
    },
    {
      id: 3,
      title: "Inception",
      type: "Movie",
      year: 2010,
      rating: 8.8,
      poster: "https://ik.imagekit.io/Cinevo/Posters/TheDarkKnight.jpg",
    },
    {
      id: 4,
      title: "Dark",
      type: "Series",
      year: 2017,
      rating: 8.7,
      poster: "https://ik.imagekit.io/Cinevo/Posters/TheDarkKnight.jpg",
    },
  ];

  return (
    <section className="animate-fadeIn">
      <div>
        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
          Watchlist
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Movies and series you've saved to watch later.
        </p>
      </div>

      <div className="mt-8 grid gap-5 grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="h-full w-fit overflow-hidden rounded-xl border border-input-border/40 bg-input-bg/40"
          >
            <Link
              to={`/movie/the-dark-knight`}
              className="cursor-pointer relative overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="object-cover transition duration-300 hover:scale-105"
              />

            </Link>

            <div className="p-4">
              <h2 className="truncate font-semibold text-text-primary">
                {movie.title}
              </h2>

              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>
                  {movie.type} • {movie.year}
                </span>

                <span className="flex items-center gap-1 bg-yellow-500/20 rounded-md text-yellow-600 px-2 py-1"><FaStar/>{movie.rating}</span>
              </div>

              <button className="cursor-pointer mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-input-border/50 py-2 text-xs text-text-secondary transition-colors duration-200 hover:border-red-600/40 hover:text-red-500">
                <FaTrash />
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UserWatchList;
