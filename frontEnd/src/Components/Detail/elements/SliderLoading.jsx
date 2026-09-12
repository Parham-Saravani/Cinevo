import { Swiper, SwiperSlide } from "swiper/react";
import LoadingCard from "../../Loader/LoadingCard";

function SimilarContentLoading() {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={13}>
      {Array.from({ length: 7 }).map((item) => {
        return (
          <SwiperSlide
            key={item}
            className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-62! max-sm:h-48!"
          >
            <LoadingCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SimilarContentLoading;
