import { useEffect } from "react";
import Header from "../Components/Header/Header";

function Genre() {
  useEffect(() => {
    document.title = "Genres | Cinevo";
  }, []);

  return (
    <>
      <header className="pt-5">
        <Header />
      </header>
    </>
  );
}

export default Genre;
