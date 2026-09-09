import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

function Trailer({ trailer }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="col-span-1 max-lg:col-span-2">
      <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
        Trailers
      </h2>
      <div className="w-full mt-2 rounded-xl overflow-hidden relative group cursor-pointer">
        <video
          onLoad={() => {
            setLoading(false);
          }}
          className={`aspect-video object-cover w-full h-full page-trailer ${loading ? "bg-gray-900 animate-pulse" : ""}`}
          src={`${trailer}`}
        ></video>
        <div className={`group-hover:opacity-100! opacity-0 transition-opacity duration-300 flex items-center justify-center text-white absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/50 ${loading ? "hidden" : ''}`}>
          <button className="flex items-center justify-center bg-cta-primary hover:bg-cta-hover max-sm:w-12 max-sm:h-12 w-15 h-15 rounded-full transition-colors duration-300 z-10 cursor-pointer play-trailer-btn">
            <FaPlay className="size-10 max-sm:size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
