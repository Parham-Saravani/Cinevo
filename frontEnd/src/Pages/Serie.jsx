import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import SerieDetail from "../Components/Detail/SerieDetail";
function Serie() {
  const { slug } = useParams();
  const [serie, setSerie] = useState(null);
  const [error, setError] = useState(false);
  const [similarContent, setSimilarContent] = useState(null);
  const baseUrl = "http://localhost:64235";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ")} | Cinevo`;

    try {
      (async () => {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/series/${slug}`),
          fetch(`${baseUrl}/api/discover/similar/${slug}`),
        ]);
        response.forEach((item) => {
          if (!item.ok) throw Error();
        });
        const [detail, similarData] = await Promise.all(
          response.map((res) => res.json()),
        );
        setSimilarContent([...similarData]);
        setSerie({ ...detail });
      })();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [slug]);

  if (error) {
    return <h1 className="text-white text-2xl">Error</h1>;
  }
  return (
    <>
      {serie && (
        <Hero
          title={serie.title}
          poster={serie.poster}
          banner={serie.banner}
          bannerDescription={serie.bannerDescription}
        />
      )}
      {serie && <SerieDetail similarContent={similarContent} {...serie} />}
      <Footer />
    </>
  );
}

export default Serie;
