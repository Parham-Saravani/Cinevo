import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import MovieDetail from "../Components/Detail/MovieDetail";

function Movie() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ")} | Cinevo`;

    try {
      (async () => {
        const response = await fetch(
          `http://localhost:64235/api/movies/${slug}`,
        );
        const data = await response.json();
        if (!response.ok) throw Error();
        console.log(data);

        setMovie({ ...data });
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
      {movie && (
        <Hero
          title={movie.title}
          poster={movie.poster}
          banner={movie.banner}
          bannerDescription={movie.bannerDescription}
        />
      )}
      {movie && <MovieDetail {...movie} />}
      <Footer />
    </>
  );
}

export default Movie;
