import { useEffect } from "react";

function Genre() {
  useEffect(() => {
    document.title = "Genres | Cinevo";
  }, []);

  return <div>Genre</div>;
}

export default Genre;
