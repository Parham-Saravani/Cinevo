import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import SerieDetail from "../Components/Detail/SerieDetail";
import toast from "react-hot-toast";
import { baseUrl } from "../Utilities/constants";

function Serie() {
  const { slug } = useParams();
  const [serie, setSerie] = useState(null);
  const [error, setError] = useState(false);
  const [similarContent, setSimilarContent] = useState(null);
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
          fetch(`${baseUrl}/api/series/${slug}`),
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
        setSerie({ ...detail });
        if (comments.message === "NO_COMMENT_FOUND") {
          setTotalComments([]);
        } else {
          setTotalComments(comments.comments);
        }
      } catch (error) {
        setError(true);
      }
    })();
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
      {serie && (
        <SerieDetail
          typeHandler={typeHandler}
          onStatusChange={onStatusChange}
          newCommentMessage={newCommentMessage}
          newCommentSpoil={newCommentSpoil}
          onSmash={removeSpilerCover}
          totalComments={totalComments}
          similarContent={similarContent}
          {...serie}
        />
      )}
      <Footer />
    </>
  );
}

export default Serie;
