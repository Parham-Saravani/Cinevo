import { FaPlay, FaTrash, FaStar } from "react-icons/fa6";
import { Link } from "react-router";

function UserWatchlistItem(poster, title, type, releaseYear, rating) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-input-bg">
      <Link
        to={`/movie/the-dark-knight`}
        className="relative block overflow-hidden"
      >
        <img
          src={poster}
          alt={title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
            <FaPlay />
          </div>
        </div>
      </Link>

      <div className="p-4">
        <h2 className="truncate font-semibold text-text-primary">{title}</h2>

        <div className="mt-1 flex items-center justify-between text-xs text-text-secondary">
          <span>
            {type} • {year}
          </span>

          <span className="flex items-center gap-1 rounded-md bg-yellow-500/20 px-2 py-1 text-yellow-500">
            <FaStar />
            {rating}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/the-dark-knight`}
            className="flex-1 rounded-lg bg-cta-primary py-2 text-center text-xs text-white"
          >
            Watch Now
          </Link>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-input-border text-text-secondary transition-colors hover:border-red-500 hover:text-red-500">
            <FaTrash />
          </button>
        </div>
      </div>
    </article>
  );
}

export default UserWatchlistItem;
