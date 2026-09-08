import { useEffect } from "react";
import Header from "../Components/Header/Header";

function Search() {
  useEffect(() => {
    document.title = "Search | Cinevo";
  }, []);

  return (
    <>
      <header className="pt-5">
        <Header />
      </header>
    </>
  );
}

export default Search;
