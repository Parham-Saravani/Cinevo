import { Swiper, SwiperSlide } from "swiper/react";

function Season({ activeSeason, onSmash, seasons }) {
  console.log();

  return (
    <Swiper
      className="mt-2"
      grabCursor={true}
      slidesPerView={"auto"}
      spaceBetween={7}
    >
      {seasons.map((item, index) => {
        return (
          <SwiperSlide
            onClick={(event) => {
              onSmash(event.currentTarget.dataset.season);
            }}
            data-season={item.title}
            className="swiper-slide w-fit! h-8!"
          >
            <button
              className={
                item.title === activeSeason
                  ? "w-full h-full hover:border-cta-primary/50 hover:bg-cta-primary/50 transition-colors duration-300 cursor-pointer border-2 text-sm border-input-border rounded-xl px-3 py-1 text-text-primary active-season"
                  : '"w-full h-full hover:border-cta-primary/50 hover:bg-cta-primary/50 transition-colors duration-300 cursor-pointer border-2 text-sm border-input-border rounded-xl px-3 py-1 text-text-primary'
              }
            >
              {item.title}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Season;
