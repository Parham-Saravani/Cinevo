import { useRef, useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { RiMovieLine } from "react-icons/ri";

function Trailer({ trailer }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isTrailerPlay, setIsTrailerPlay] = useState(false);
  const trailerVideo = useRef(null);

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
            ref={trailerVideo}
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
          className={`${!isTrailerPlay ? "opacity-100" : ""} group-hover:opacity-100! opacity-0 transition-opacity duration-300 flex items-center justify-center text-white absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/50 ${loading ? "hidden" : ""}`}
        >
          <button
            onClick={() => {
              isTrailerPlay
                ? trailerVideo.current.pause()
                : trailerVideo.current.play();
              setIsTrailerPlay((prev) => !prev);
            }}
            className="flex items-center justify-center bg-cta-primary hover:bg-cta-hover max-sm:w-12 max-sm:h-12 w-15 h-15 rounded-full transition-colors duration-300 z-10 cursor-pointer play-trailer-btn"
          >
            {isTrailerPlay ? (
              <FaPause className="size-8 max-sm:size-5" />
            ) : (
              <FaPlay className="size-8 max-sm:size-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
