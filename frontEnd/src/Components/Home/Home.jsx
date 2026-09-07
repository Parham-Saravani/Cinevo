import Hero from "./elements/Hero/Hero";
import LoadingCard from "../Loading/LoadingCard";

import Footer from "../Footer/Footer";
import { FaFire, FaCalendar } from "react-icons/fa";
import { BsFillTvFill } from "react-icons/bs";
import { FaStar, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import Error from "../Error/Error";

function Home() {
  const [trending, setTrending] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const [papular, setPapular] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const baseUrl = "http://localhost:64235";

    (async () => {
      try {
        const data = await Promise.all([
          fetch(`${baseUrl}/api/banners`),
          fetch(`${baseUrl}/api/discover/trending`),
          fetch(`${baseUrl}/api/discover/newRelease`),
          fetch(`${baseUrl}/api/discover/popular`),
          fetch(`${baseUrl}/api/discover/recommend`),
        ]);
        data.forEach((item) => {
          if (!item.ok) throw Error();
        });        
        setBanners(await data[0].json());
        setTrending(await data[1].json());
        setNewRelease(await data[2].json());
        setPapular(await data[3].json());
        setRecommend(await data[4].json());
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
      }
    })();
  }, []);

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Hero data={banners} />
      <main className="mt-8 mb-15">
        {/* <!-- Trending --> */}
        <section>
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="flex gap-2 items-center text-text-primary font-bold text-2xl max-md:text-xl max-sm:text-lg">
                <FaFire className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
                Trending Now
              </h2>
              <a
                className="text-text-secondary text-xs flex items-center hover:text-text-primary transition-colors duration-300"
                href="#"
              >
                View All
                <FaArrowRight className="ml-1.5 size-4 fill-text-secondary" />
              </a>
            </div>
            <div className="mt-4 overflow-hidden">
              <Slider data={trending} />
            </div>
          </div>
        </section>

        {/* <!-- Releases --> */}
        <section className="mt-5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="flex gap-2 items-center text-text-primary font-bold text-2xl max-md:text-xl max-sm:text-lg">
                <FaCalendar className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
                New Releases
              </h2>
              <a
                className="text-text-secondary text-xs flex items-center hover:text-text-primary transition-colors duration-300"
                href="#"
              >
                View All
                <FaArrowRight className="ml-1.5 size-4 fill-text-secondary" />
              </a>
            </div>
            <div className="mt-4 overflow-hidden">
              <Slider data={newRelease} />
            </div>
          </div>
        </section>

        {/* <!-- Popular Series --> */}
        <section className="mt-5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="flex gap-2 items-center text-text-primary font-bold text-2xl max-md:text-xl max-sm:text-lg">
                <BsFillTvFill className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
                Popular Series
              </h2>
              <a
                className="text-text-secondary text-xs flex items-center hover:text-text-primary transition-colors duration-300"
                href="#"
              >
                View All
                <FaArrowRight className="ml-1.5 size-4 fill-text-secondary" />
              </a>
            </div>
            <div className="mt-4 overflow-hidden">
              <Slider data={papular} />
            </div>
          </div>
        </section>

        {/* <!-- Recommended --> */}
        <section className="mt-5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-text-primary font-bold text-2xl max-md:text-xl max-sm:text-lg">
                <FaStar className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
                Recommended
              </h2>
              <a
                className="text-text-secondary text-xs flex items-center hover:text-text-primary transition-colors duration-300"
                href="#"
              >
                View All
                <FaArrowRight className="ml-1.5 size-4 fill-text-secondary" />
              </a>
            </div>
            <div className="mt-4 overflow-hidden">
              <Slider data={recommend} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
