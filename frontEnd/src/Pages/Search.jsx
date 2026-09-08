import { useEffect } from "react";

function Search() {
  useEffect(() => {
    document.title = "Search | Cinevo";
  }, []);

  return <div>Search</div>;
}

export default Search;
