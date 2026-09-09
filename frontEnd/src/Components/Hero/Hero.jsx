import React, { useState } from "react";
import Header from "../Header/Header";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

function Hero({ title, banner, poster, bannerDescription }) {
  const [bannerLoading, setBannerLoading] = useState(true);
  const [posterLoading, setPosterLoading] = useState(true);
  return (
    <header className="animate-fadeIn">
      <section className="absolute z-10 top-5 left-0 right-0">
        <Header />
      </section>

      <section className="h-190 max-xl:h-160 max-lg:h-140 max-md:h-100 max-sm:h-90 relative header-hero">
        <img
          onLoad={() => setBannerLoading(false)}
          src={banner}
          className={`blur-xs max-sm:blur-none w-full h-full object-cover ${bannerLoading ? "animate-pulse bg-gray-900" : ""}`}
          alt=""
          loading="lazy"
        />

        <div className="container mx-auto">
          <div className="top-20 max-xl:top-20 max-lg:top-80 max-md:top-60 max-sm:top-40 max-sm:w-[95%] absolute flex max-sm:flex-col items-center z-10 bottom-0 my-auto h-fit">
            <div className="max-sm:mb-6 relative h-107 max-xl:h-90 max-lg:h-70 max-md:h-55 w-80 max-xl:w-67 max-md:w-50 max-sm:w-45 rounded-xl">
              <img
                src={poster}
                onLoad={() => setPosterLoading(false)}
                className={`rounded-xl w-full block ${posterLoading ? "animate-pulse bg-gray-900" : ""}`}
                loading="lazy"
                alt=""
              />
              <div className="absolute top-0 w-full h-full bg-black/20 z-10 rounded-xl"></div>
            </div>
            <div className="ml-9 w-fit max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <h1 className="text-white text-6xl max-md:text-5xl max-sm:text-4xl font-bold max-sm:text-center">
                {title}
              </h1>
              <p className="mt-6 text-white w-140 max-lg:w-full max-md:w-90 max-sm:hidden max-md:line-clamp-3">
                {bannerDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-3 max-sm:items-center max-sm:justify-start">
                <button className="flex gap-2 items-center justify-center bg-cta-primary hover:bg-cta-hover text-text-primary font-semibold w-45 max-lg:w-40 max-sm:basis-30 max-sm:text-[10px] text-sm py-3 transition-colors duration-300 cursor-pointer rounded-xl">
                  <FaPlay className="size-6 max-sm:size-4 fill-current" />
                  Play Now
                </button>
                <button className="max-sm:ml-0 flex items-center justify-center text-text-primary border-white/20 hover:border-input-border/50 hover:bg-input-border/50 transition-colors duration-300 ml-4 rounded-xl w-45 max-lg:w-40 max-sm:basis-30 max-sm:text-[9px] py-3 text-sm border-2  cursor-pointer">
                  <FaPlus className="size-6 max-sm:size-4 fill-current" />
                  Add To Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
