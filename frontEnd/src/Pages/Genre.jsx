import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";

import { baseUrl } from "../Utilities/constants";
import GenreSlider from "../Components/GenreSlider/GenreSlider";
import ContentFilters from "../Components/ContentFilters/ContentFilters";

function Genre() {
  const [years, setYears] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [layout, setLayout] = useState("grid");
  const ChangeLayout = (value) => {
    setLayout(value);
  };
  useEffect(() => {
    document.title = "Genres | Cinevo";
    (async () => {
      try {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/discover/genre`),
        ]);
        const [genres] = await Promise.all(response.map((res) => res.json()));

        setGenres(genres);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  const changeGenre = (value) => {
    setCurrentGenre(value);
  };
  return (
    <>
      <header className="pt-5">
        <Header />

        <main className="mt-10 text-text-primary animate-fadeIn">
          <section>
            <div className="container mx-auto">
              <h3 className="font-bold text-3xl max-sm:text-2xl">
                Explore Genres
              </h3>
              <p className="mt-1 text-text-secondary text-sm max-sm:text-xs">
                Discover content by your favorite genres. Choose a genre to see
                related movies and series.
              </p>
              <ContentFilters setLayout={setLayout} layout={layout} isGenre={true} />
              <GenreSlider
                changeGenre={changeGenre}
                currentGenre={currentGenre}
                data={genres}
              />
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Genre;
