import LoadingCard from "../Loading/LoadingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
function Slider({ data }) {
  console.log(data);
  
  if (data.length) {
    return <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={13}>
      {data.map((item) => {
        return <SwiperSlide className="group h-63! max-lg:h-55! max-md:h-50! max-sm:h-45! w-45! max-xl:w-40! max-md:w-38! max-sm:w-32!"><Card {...item}/></SwiperSlide>
      })}
    </Swiper>;
  } else {
    return (
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={13}>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
        <SwiperSlide className="w-45! max-xl:w-40! max-md:w-38! max-sm:w-32! h-60! max-sm:h-48!">
          <LoadingCard />
        </SwiperSlide>
      </Swiper>
    );
  }
}

export default Slider;
