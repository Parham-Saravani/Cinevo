import { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";

function ScreenShot({ imgUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className={
        isLoading
          ? "col-span-1 overflow-hidden rounded-xl aspect-video h-full w-full relative bg-gray-900 animate-pulse cursor-pointer"
          : "col-span-1 overflow-hidden rounded-xl aspect-video h-full w-full group relative cursor-pointer"
      }
    >
      {error ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 rounded-xl gap-2">
          <RiMovie2Line className="fa-solid fa-film text-4xl text-gray-500" />
          <p className="text-sm font-medium text-text-primary/70">
            Scene not available
          </p>

          <span className="text-xs text-text-secondary/50">
            Screenshot couldn't be loaded
          </span>
        </div>
      ) : (
        <>
          <img
            src={imgUrl}
            onLoad={(event) => {
              setIsLoading(false);
            }}
            onError={() => {
              setIsLoading(false);
              setError(true);
            }}
            className={`animate-fadeIn w-full h-full object-cover aspect-video page-screenshot ${isLoading ? "opacity-0" : "opacity-100"}`}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300"></div>
        </>
      )}
    </div>
  );
}

export default ScreenShot;
