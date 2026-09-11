import Header from "../Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Banner from "./Banner";
function HomeHero({ data }) {
  return (
    <header className="animate-fadeIn header">
      <section className="absolute z-30 left-0 right-0">
        <Header />
      </section>
      <section className="banner relative h-190 max-xl:h-150 max-lg:h-140 max-md:h-100 max-sm:h-90">
        {data ? (
          <Swiper
            className="h-full"
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id} className="">
                  <Banner {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <div
                  className=" w-full object-cover h-full bg-gray-900 animate-pulse"
                  loading="lazy"
                ></div>
                <div className="absolute bg-linear-90 from-black/70 via-black/60 to-transparent w-full top-0 right-0 h-full">
                  <div className="container mx-auto">
                    <div className="top-0 bottom-0 my-auto absolute h-fit z-1">
                      <div className="w-80 h-10 bg-gray-900 rounded-md animate-pulse"></div>
                      <div className="mt-2 h-4 bg-gray-900 rounded-md animate-pulse"></div>
                      <div className="mt-1 h-4 bg-gray-900 rounded-md animate-pulse"></div>
                      <div className="mt-1 h-4 bg-gray-900 rounded-md animate-pulse"></div>
                      <div className="mt-1 h-4 bg-gray-900 rounded-md animate-pulse"></div>
                      <div className="mt-5 flex">
                        <div className="rounded-md w-45 h-12 bg-gray-900 animate-pulse"></div>
                        <div className="ml-4 rounded-md w-45 h-12 bg-gray-900 animate-pulse"></div>
                      </div>
                      <div className="mt-4 w-full h-5 rounded-md bg-gray-900 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </section>
    </header>
  );
}

export default HomeHero;
