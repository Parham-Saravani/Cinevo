import { useEffect } from "react";

function Movies() {
  useEffect(() => {
    document.title = "Movies | Cinevo";
  }, []);

  return <div>Movies</div>;
}

export default Movies;
