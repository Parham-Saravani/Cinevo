import { Swiper, SwiperSlide } from "swiper/react";

function GenreSlider({
  setCurrentGenre,
  searchParams,
  setSearchParams,
  data,
  currentGenre,
}) {
  return (
    <div className="mt-3 flex items-center w-full">
      <span className="text-cta-primary text-[12px] block w-25 max-xl:w-35 max-lg:hidden">
        All Genres:
      </span>
      <div className="text-[13px] overflow-hidden">
        <Swiper slidesPerView={"auto"} spaceBetween={5} grabCursor={true}>
          <SwiperSlide
            onClick={(event) => {
              const params = new URLSearchParams(searchParams);
              params.delete("genre");
              setSearchParams(params);
              setCurrentGenre("All");
            }}
            className={`w-fit! h-fit! rounded-xl border-[1.8px] border-input-border/50 cursor-pointer px-2.5 py-1 transition-colors! duration-300 hover:border-cta-primary ${currentGenre === "All" ? "active-genre" : ""} `}
          >
            All
          </SwiperSlide>

          {data.map((item) => {
            return (
              <SwiperSlide
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.set("genre", item);
                  setSearchParams(params);
                  setCurrentGenre(item);
                }}
                className={`w-fit! h-fit! rounded-xl border-[1.8px] border-input-border/50 cursor-pointer px-2.5 py-1 transition-colors! duration-300 hover:border-cta-primary ${currentGenre === item ? "active-genre" : ""}`}
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
