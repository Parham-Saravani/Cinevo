import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import MovieDetail from "../Components/Detail/MovieDetail";

function Movie() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [similarContent, setSimilarContent] = useState(null);
  const [totalComments, setTotalComments] = useState([]);

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
          fetch(`${baseUrl}/api/movies/${slug}`),
          fetch(`${baseUrl}/api/discover/similar/${slug}`),
          fetch(`${baseUrl}/api/comment/${slug}`),
        ]);
        response.forEach((item) => {
          if (!item.ok) throw Error();
        });
        const [detail, similarData, comments] = await Promise.all(
          response.map((res) => res.json()),
        );
        setSimilarContent([...similarData]);
        setMovie({ ...detail });
        if (comments.message === "NO_COMMENT_FOUND") {
          setTotalComments([]);
        }else{
          setTotalComments(comments)
        }
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
      {movie && (
        <Hero
          title={movie.title}
          poster={movie.poster}
          banner={movie.banner}
          bannerDescription={movie.bannerDescription}
        />
      )}
      {movie && (
        <MovieDetail
          totalComments={totalComments}
          similarContent={similarContent}
          {...movie}
        />
      )}
      <Footer />
    </>
  );
}

export default Movie;
