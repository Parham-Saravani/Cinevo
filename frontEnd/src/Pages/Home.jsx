import HomeHero from "../Components/Home/HomeHero";
import Footer from "../Components/Footer/Footer";
import { FaFire, FaCalendar } from "react-icons/fa";
import { BsFillTvFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Section from "../Components/Home/Section";
import { baseUrl } from "../Utilities/constants";

function Home() {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    banners: null,
    trending: null,
    newRelease: null,
    popular: null,
    recommend: null,
  });
  useEffect(() => {
    document.title = "Home | Cinevo";

    (async () => {
      try {
        const responses = await Promise.all([
          fetch(`${baseUrl}/api/banners`),
          fetch(`${baseUrl}/api/discover/trending`),
          fetch(`${baseUrl}/api/discover/newRelease`),
          fetch(`${baseUrl}/api/discover/popular`),
          fetch(`${baseUrl}/api/discover/recommend`),
        ]);

        responses.forEach((item) => {
          if (!item.ok) throw new NotFound(`${item} take error!`);
        });

        const [banners, trending, newRelease, popular, recommend] =
          await Promise.all(responses.map((responce) => responce.json()));
        setData({
          banners: banners,
          trending: trending,
          newRelease: newRelease,
          popular: popular,
          recommend: recommend,
        });
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
      }
    })();
  }, []);

  if (error) {
    return (
      <NotFound error={false}>Something happend please refresh Page!</NotFound>
    );
  }

  return (
    <>
      <HomeHero data={data.banners} />
      <main className="mt-8 mb-15">
        {/* <!-- Trending --> */}
        <Section
          icon={
            <FaFire className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
          }
          data={data.trending}
        >
          {" "}
          Trending Now
        </Section>

        {/* <!-- Releases --> */}
        <Section
          icon={
            <FaCalendar className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
          }
          data={data.newRelease}
        >
          {" "}
          New Releases
        </Section>

        {/* <!-- Popular Series --> */}
        <Section
          icon={
            <BsFillTvFill className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
          }
          data={data.popular}
        >
          {" "}
          Popular Series
        </Section>

        {/* <!-- Recommended --> */}
        <Section
          icon={
            <FaStar className="size-6 max-md:size-5 max-sm:size-4.5 fill-cta-primary" />
          }
          data={data.recommend}
        >
          {" "}
          Recommended
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
