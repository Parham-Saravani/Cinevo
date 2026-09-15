import { FaBookmark, FaPlay, FaTrash } from "react-icons/fa6";

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
    <section>
      <div>
        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">Watchlist</h1>

        <p className="mt-1 text-sm text-text-secondary">
          Movies and series you've saved to watch later.
        </p>
      </div>

      <div className="mt-8 grid gap-5 grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="group h-full w-fit overflow-hidden rounded-xl border border-input-border/40 bg-input-bg/40"
          >
            <div className="relative overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                  <FaPlay />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h2 className="truncate font-semibold text-text-primary">{movie.title}</h2>

              <div className="mt-2 flex items-center justify-between text-xs text-text-secondary">
                <span>
                  {movie.type} • {movie.year}
                </span>

                <span>★ {movie.rating}</span>
              </div>

              <button className="cursor-pointer mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-input-border/50 py-2 text-xs text-text-secondary transition-colors duration-200 hover:border-red-600/40 hover:text-red-500">
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



export default UserWatchList