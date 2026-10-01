import { useState } from "react";
import { LuImageOff } from "react-icons/lu";
import { Link } from "react-router";

function Card({ poster, slug, title, type, genres }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <Link
      to={type === "movie" ? `/movie/${slug}` : `/serie/${slug}`}
      className={`block relative h-full animate-fadeIn`}
    >
      {error ? (
        <div className="flex h-full w-full items-center bg-gray-900 justify-center rounded-xl bg-card">
          <LuImageOff className="text-4xl text-text-secondary" />
        </div>
      ) : (
        <img
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
          className={`h-full w-full rounded-xl ${loading ? "bg-gray-900 animate-pulse" : ""}`}
          src={poster}
          alt={title}
          loading="lazy"
        />
      )}

      <div className="absolute opacity-0 group-hover:opacity-100 transition-normal duration-300 top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-10">
        <div className="relative h-full w-full">
          <div className="absolute flex justify-center flex-wrap left-0 right-0 mx-auto w-fit top-0 bottom-0 my-auto h-fit px-2 gap-2">
            {genres.map((genre, index) => {
              return (
                <span
                  key={index}
                  className="rounded-xl px-2 max-lg:px-1.5 py-1 text-text-primary border border-text-secondary text-[10px] max-lg:text-[9px] max-md:text-[8px]"
                >
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
