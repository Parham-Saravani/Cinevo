import LoadingCard from "../Loader/LoadingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
function Slider({ data }) {
  if (data) {
    return (
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={13}>
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="group rounded-xl overflow-hidden h-63! max-lg:h-55! max-md:h-50! max-sm:h-45! w-45! max-xl:w-40! max-md:w-38! max-sm:w-32!"
            >
              <Card {...item} />;
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } else {
    return (
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={13}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => {
          return (
            <SwiperSlide
              key={item}
              className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!"
            >
              <LoadingCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

export default Slider;
