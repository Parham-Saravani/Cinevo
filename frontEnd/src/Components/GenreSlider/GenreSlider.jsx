import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router";

function GenreSlider({ data, currentGenre, changeGenre }) {
  return (
    <div className="mt-3 flex items-center w-full">
      <span className="text-cta-primary text-[12px] block w-25 max-xl:w-35 max-lg:hidden">
        All Genres:
      </span>
      <div className="text-[13px] overflow-hidden">
        <Swiper slidesPerView={"auto"} spaceBetween={5} grabCursor={true}>
          <SwiperSlide
            onClick={(event) => changeGenre(event.target.dataset.value)}
            className={`w-fit! h-fit! rounded-xl border-[1.8px] border-input-border/50 cursor-pointer px-2.5 py-1 transition-colors! duration-300 hover:border-cta-primary ${currentGenre === "All" ? "active-genre" : " "} `}
            data-value="All"
          >
            All
          </SwiperSlide>

          {data.map((item) => {
            return (
              <SwiperSlide
                onClick={() => changeGenre(item)}
                className={`w-fit! h-fit! rounded-xl border-[1.8px] border-input-border/50 cursor-pointer px-2.5 py-1 transition-colors! duration-300 hover:border-cta-primary ${currentGenre === item ? "active-genre" : ""}`}
                data-value={item}
              >
                {item}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default GenreSlider;
