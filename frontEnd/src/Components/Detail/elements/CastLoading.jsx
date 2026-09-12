import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../Content";
function CastLoading() {
  return (
    <Content value={"Cast"}>
      <Swiper
        slidesPerView={"auto"}
        grabCursor={true}
        spaceBetween={10}
        className="mt-2"
      >
        {Array.from({ length: 10 }).map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-fit!">
              <div className="w-fit flex flex-col items-center">
                <div className="size-14 max-sm:size-12 rounded-full bg-gray-900" />
                <div className="mt-1.5 w-10 h-2 bg-gray-900 animate-pulse rounded-md"></div>
                <div className="mt-1.5 w-5 h-2 bg-gray-900 animate-pulse rounded-md"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Content>
  );
}

export default CastLoading;
