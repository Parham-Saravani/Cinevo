import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import MovieDetail from "../Components/Detail/MovieDetail";
import { baseUrl } from "../Utilities/constants";
import { useNavigate } from "react-router";

function Movie() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [similarContent, setSimilarContent] = useState([]);
  const [totalComments, setTotalComments] = useState([]);
  const [newCommentMessage, setNewCommentMessage] = useState("");
  const [newCommentSpoil, setNewCommentSpoil] = useState(false);

  const removeSpilerCover = (_id) => {
    const newComments = totalComments.map((item) => {
      if (item._id === _id) {
        item.isSpoil = false;
      }
      return { ...item };
    });
    setTotalComments(newComments);
  };
  const typeHandler = (value) => {
    setNewCommentMessage(value);
  };
  const onStatusChange = (value) => {
    setNewCommentSpoil(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ")} | Cinevo`;

    (async () => {
      try {
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
        if (detail.message === "NOT_FOUND") throw Error();
        setSimilarContent([...similarData]);
        setMovie({ ...detail });

        if (comments.message === "NO_COMMENT_FOUND") {
          setTotalComments([]);
        } else {
          setTotalComments(comments.comments);
        }
      } catch (error) {
        setError(true);
        navigate("/error", {
          state: {
            status: "404",
            title: "Movie or Series Not Found",
            desc: "We couldn't find the movie or series you're looking for.It may have been removed, renamed, or the link may be incorrect.",
          },
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (error) {
    return <h1 className="text-white text-2xl">Error</h1>;
  }
  return (
    <>
      <Hero
        loading={loading}
        title={movie?.title}
        poster={movie?.poster}
        banner={movie?.banner}
        bannerDescription={movie?.bannerDescription}
      />
      <MovieDetail
        loading={loading}
        typeHandler={typeHandler}
        onStatusChange={onStatusChange}
        newCommentMessage={newCommentMessage}
        newCommentSpoil={newCommentSpoil}
        onSmash={removeSpilerCover}
        totalComments={totalComments}
        similarContent={similarContent}
        {...movie}
      />
      <Footer />
    </>
  );
}

export default Movie;
