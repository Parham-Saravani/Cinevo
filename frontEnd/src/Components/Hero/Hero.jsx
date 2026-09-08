import React from "react";
import Header from "../Header/Header";

function Hero() {
  return (
    <header>
      <section className="absolute z-10 top-5 left-0 right-0">
        <Header />
      </section>

      <section className="h-190 max-xl:h-160 max-lg:h-140 max-md:h-100 max-sm:h-90 relative header-hero">
        <img
          className="blur-xs max-sm:blur-none w-full h-full object-cover page-banner bg-gray-900 animate-pulse"
          alt=""
        />

        <div className="container mx-auto">
          <div className="top-20 max-xl:top-20 max-lg:top-80 max-md:top-60 max-sm:top-40 max-sm:w-[95%] absolute flex max-sm:flex-col items-center z-10 bottom-0 my-auto h-fit">
            <div className="max-sm:mb-6 relative h-100 max-xl:h-90 max-lg:h-70 max-md:h-55 w-80 max-xl:w-67 max-md:w-50 max-sm:w-45 animate-pulse bg-gray-900 rounded-xl">
              <img
                className="rounded-xl w-full block page-poster"
                loading="lazy"
                alt=""
              />
              <div className="absolute top-0 w-full h-full bg-black/20 z-10 rounded-xl"></div>
            </div>
            <div className="ml-9 w-fit max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <h1 className="text-white text-6xl max-md:text-5xl max-sm:text-4xl font-bold max-sm:text-center page-title">
                Vikings
              </h1>
              <p className="mt-6 text-white w-140 max-lg:w-full max-md:w-90 max-sm:hidden max-md:line-clamp-3 page-description"></p>
              <div className="mt-5 flex flex-wrap gap-3 max-sm:items-center max-sm:justify-start">
                <button className="flex gap-2 items-center justify-center bg-cta-primary hover:bg-cta-hover text-text-primary font-semibold w-45 max-lg:w-40 max-sm:basis-30 max-sm:text-[10px] text-sm py-3 transition-colors duration-300 cursor-pointer rounded-xl">
                  <svg
                    className="size-6 max-sm:size-4"
                    viewBox="0 0 24 24"
                    id="play"
                  >
                    <path
                      fill="currentColor"
                      d="M15.0733 5.20654C13.3412 4.21896 11.9958 3.45183 10.9031 2.95418C9.80638 2.45466 8.85435 2.17257 7.92862 2.26865C6.45941 2.42116 5.1219 3.18242 4.25027 4.36721C3.69972 5.11557 3.47048 6.07608 3.36002 7.26521C3.24999 8.44959 3.25 9.98465 3.25 11.9588V12.0411C3.24999 14.0153 3.24999 15.5504 3.36002 16.7347C3.47048 17.9239 3.69972 18.8844 4.25027 19.6327C5.1219 20.8175 6.45941 21.5788 7.92862 21.7313C8.85435 21.8274 9.80638 21.5453 10.9031 21.0458C11.9958 20.5481 13.3412 19.781 15.0732 18.7934L15.1435 18.7533C16.8755 17.7658 18.2209 16.9987 19.2038 16.3129C20.1894 15.6252 20.916 14.9503 21.297 14.1052C21.901 12.7654 21.901 11.2346 21.297 9.89473C20.916 9.04969 20.1894 8.37477 19.2038 7.68703C18.2209 7.00126 16.8755 6.23412 15.1435 5.24661L15.0733 5.20654Z"
                    ></path>
                  </svg>
                  Play Now
                </button>
                <button className="max-sm:ml-0 flex items-center justify-center text-text-primary border-white/20 hover:border-input-border/50 hover:bg-input-border/50 transition-colors duration-300 ml-4 rounded-xl w-45 max-lg:w-40 max-sm:basis-30 max-sm:text-[9px] py-3 text-sm border-2  cursor-pointer">
                  <svg
                    className="size-6 max-sm:size-4"
                    viewBox="0 0 24 24"
                    id="plus"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5a1 1 0 0 0-1 1v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6a1 1 0 0 0-1-1Z"
                    ></path>
                  </svg>
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
