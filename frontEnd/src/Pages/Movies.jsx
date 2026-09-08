import { useEffect } from "react";
import Header from "../Components/Header/Header";

function Movies() {
  useEffect(() => {
    document.title = "Movies | Cinevo";
  }, []);

  return <>
    <header className="pt-5">
      <Header />
    </header>
  </>;
}

export default Movies;
