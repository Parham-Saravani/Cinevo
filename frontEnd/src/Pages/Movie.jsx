import { useParams } from "react-router";
import { useEffect, useState } from "react";
 title={}
function Movie() {
  const [movie , setMovie] = useState(null)
  const { slug } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:64235/api/movies/${slug}`);
      const data = await response.json();
      console.log(data);
    })();
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toLocaleUpperCase() + item.slice(1))
      .join(" ")} | Cineo`;
  }, []);

  return <>
    <Hero title={}/>
  </>;
}

export default Movie;
