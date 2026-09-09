import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { RiMovieLine } from "react-icons/ri";

function Trailer({ trailer }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="col-span-1 max-lg:col-span-2">
      <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
        Trailers
      </h2>
      <div className="w-full mt-2 rounded-xl overflow-hidden relative group cursor-pointer">
        {error ? (
          <div className="bg-gray-900 aspect-video flex flex-col items-center justify-center w-full h-full rounded-xl gap-2">
            <RiMovieLine className="text-4xl text-gray-500" />

            <p className="text-sm font-medium text-text-primary/70">
              Trailer not available
            </p>

            <span className="text-xs text-text-secondary/50">
              Video couldn't be loaded
            </span>
          </div>
        ) : (
          <video
            onLoadedData={() => {
              setLoading(false);
            }}
            onLoadStart={() => {
              setLoading(true);
            }}
            onError={() => setError(true)}
            className={`aspect-video object-cover w-full h-full ${loading ? "bg-gray-900 animate-pulse" : ""}`}
            src={trailer}
          ></video>
        )}
        <div
          className={`group-hover:opacity-100! opacity-0 transition-opacity duration-300 flex items-center justify-center text-white absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/50 ${loading ? "hidden" : ""}`}
        >
          <button className="flex items-center justify-center bg-cta-primary hover:bg-cta-hover max-sm:w-12 max-sm:h-12 w-15 h-15 rounded-full transition-colors duration-300 z-10 cursor-pointer play-trailer-btn">
            <FaPlay className="size-10 max-sm:size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
