import { useState } from "react";
import FormatTimeAgo from "../../../Utilities/FormatTimeAgo/FormatTimeAgo";
import { LuImageOff } from "react-icons/lu";

function LatestContentItem({ poster, title, genres, createdAt }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div className="flex -center gap-3">
        {error ? (
          <div className="flex h-17 w-14 items-center justify-center rounded-lg bg-white/5">
            <LuImageOff className="text-lg text-text-secondary" />
          </div>
        ) : (
          <img
            onLoad={() => setLoading(false)}
            onError={() => setError(true)}
            src={poster}
            alt={title}
            className={`${loading ? "animate-pulse bg-gray-900" : ""} w-14 h-17 rounded-lg object-cover`}
          />
        )}

        <div className="flex-1">
          <h3 className="text-sm font-medium text-text-primary">{title}</h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-text-secondary"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="text-[10px] flex justify-center items-center bg-bg-primary/50 text-text-secondary rounded-full max-w-20 px-1.5 py-1.5 truncate">
        {FormatTimeAgo(createdAt)}
      </span>
    </div>
  );
}

export default LatestContentItem;
