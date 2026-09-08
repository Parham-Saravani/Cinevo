import { Swiper, SwiperSlide } from "swiper/react";

function Cast({cast}) {
  return (
    <Swiper
      slidesPerView={"auto"}
      grabCursor={true}
      spaceBetween={1}
      className="mt-2"
    >
      {cast.map((item, index) => {
        return (
          <SwiperSlide key={index} className="w-fit!">
            <div className="w-fit flex flex-col items-center">
              <img
                onError={(event) =>
                  (event.target.src = "/profile/default.webp")
                }
                className="size-14 max-sm:size-12 rounded-full object-cover bg-gray-900"
                alt={item.title}
                src={item.image}
              />
              <h4 className="text-text-primary text-[10px] mt-1.5 w-17 text-center">
                ${item.title}
              </h4>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Cast;
