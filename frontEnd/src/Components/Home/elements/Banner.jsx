import { FaPlay, FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import TimeFormatter from "../../../Utilities/TimeFormatter/TimeFormatter";
function Banner({
  banner,
  bannerDescription,
  duration,
  genres,
  rating,
  releaseYear,
  slug,
  title,
}) {
  return (
    <>
      <img
        className=" w-full object-cover h-full"
        src={banner}
        loading="lazy"
      />
      <div className="absolute bg-linear-90 from-black/70 via-black/60 to-transparent w-full top-0 right-0 h-full">
        <div className="container mx-auto">
          <div className="top-0 max-md:top-8 bottom-0 my-auto absolute h-fit">
            <h1 className="text-white text-6xl font-bold max-lg:text-4xl max-sm:text-2xl">
              {title}
            </h1>
            <p className="mt-2 text-text-secondary w-140 max-sm:w-full max-md:text-[13px] max-md:line-clamp-3 max-sm:line-clamp-2">
              {bannerDescription}
            </p>
            <div className="mt-5 flex">
              <button className="flex max-md:gap-1 gap-2 items-center justify-center bg-cta-primary hover:bg-cta-hover text-text-primary font-semibold w-45 max-md:w-fit text-sm max-md:text-[10px] max-md:px-3 py-3 max-md:py-0 transition-colors duration-300 cursor-pointer rounded-xl">
                <FaPlay className="size-6 max-md:size-4 fill-text-primary" />
                Watch Now
              </button>
              <button className="flex items-center justify-center text-text-secondary border-input-border hover:bg-input-border/50 transition-colors duration-300 ml-4 rounded-xl w-45 max-md:w-fit max-md:px-3 py-3 text-sm max-md:text-[10px] border-2  cursor-pointer">
                <FaPlus className="size-6 max-md:size-4 fill-current" />
                Add To Watchlist
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center text-sm max-md:text-xs">
              <p className="relative mx-4 flex gap-1 items-center text-text-secondary banner-data">
                <FaStar className="size-4 fill-yellow-500" />
                {rating}/10
              </p>
              <p className="relative mx-4 text-text-secondary banner-data">
                {genres.map((item, index) => {
                  return (
                    <span
                      className="banner-genres mr-2.5 relative before:absolute before:content-[','] before:-right-1.5"
                      key={index}
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className="relative mx-4 text-text-secondary banner-data">
                {releaseYear}
              </p>
              <p className="relative mx-4 text-text-secondary banner-data">
                {TimeFormatter(duration)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-lazy-preloader"></div>
    </>
  );
}

export default Banner;
