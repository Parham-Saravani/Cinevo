import { FaHeart, FaPlay, FaTrash, FaStar } from "react-icons/fa6";
import { Link } from "react-router";

function UserFavoriteItem({
  poster,
  title,
  rating,
  releaseYear,
  type,
  genres,
}) {
  return (
    <article className="col-span-1 group overflow-hidden rounded-2xl bg-input-bg">
      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={title}
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
            {title}
          </h2>

          <span className="text-xs text-text-secondary">{releaseYear}</span>
        </div>

        <p className="mt-1 text-xs text-text-secondary">{type}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {genres.slice(0, 2).map((genre) => (
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
            {rating}
          </span>

          <button className="rounded-lg border border-input-border px-2 py-2 text-text-secondary transition-colors hover:border-red-500 hover:text-red-500">
            <FaTrash />
          </button>
        </div>
      </div>
    </article>
  );
}

export default UserFavoriteItem;
