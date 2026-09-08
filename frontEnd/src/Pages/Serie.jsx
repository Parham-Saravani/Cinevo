import { useParams } from "react-router";
import { useEffect } from "react";
import Hero from "../Components/Hero/Hero";

function Serie() {
    const [serie , setSerie] = useState(null)
  
  const { slug } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:64235/api/series/${slug}`);
      const data = await response.json();
      console.log(data);
    })();
    document.title = `${slug
      .split("-")
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(" ")} | Cinevo`;
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}

export default Serie;
