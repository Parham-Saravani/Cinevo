import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import SerieDetail from "../Components/Detail/SerieDetail";
function Serie() {
  const { slug } = useParams();
  const [serie, setSerie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [comment, setComment] = useState({
    isSpoil: false,
    message: null,
  });
  useEffect(() => {
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ")} | Cinevo`;

    try {
      (async () => {
        const response = await fetch(
          `http://localhost:64235/api/series/${slug}`,
        );
        const data = await response.json();

        console.log(data);
        if (!response.ok) throw Error();
        setSerie({ ...data });
      })();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, []);

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
      {serie && <SerieDetail {...serie} />}
      <Footer />
    </>
  );
}

export default Serie;
