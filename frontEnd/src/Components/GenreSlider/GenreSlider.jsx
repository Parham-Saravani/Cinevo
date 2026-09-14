import { Swiper, SwiperSlide } from "swiper/react";

function GenreSlider({
  setCurrentGenre,
  searchParams,
  setSearchParams,
  data,
  currentGenre,
  loading,
}) {
  return (
    <div className="mt-3 flex items-center w-full">
      <span
        className={`${loading ? "w-20 max-xl:w-20" : "w-25 max-xl:w-35"} text-cta-primary text-[12px] block max-lg:hidden`}
      >
        All Genres:
      </span>
      <div className="text-[13px] overflow-hidden">
        <Swiper slidesPerView={"auto"} spaceBetween={5} grabCursor={true}>
          {loading ? (
            Array.from({ length: 10 }).map((_, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-20! h-8! rounded-xl animate-pulse bg-gray-900"
                ></SwiperSlide>
              );
            })
          ) : (
            <>
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
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default GenreSlider;
