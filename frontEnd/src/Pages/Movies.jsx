import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import { baseUrl } from "../Utilities/constants";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [years, setYears] = useState(null);
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Movies | Cinevo";
    (async () => {
      try {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/movies`),
          fetch(`${baseUrl}/api/movies/genre`),
          fetch(`${baseUrl}/api/movies/year`),
        ]);
        response.forEach((item) => {
          if (!item.ok) {
            throw Error();
          }
        });
        const [totalMovies, genres, years] = await Promise.all(
          response.map((res) => res.json()),
        );
        setYears([...years]);
        setGenres([...genres]);
        setMovies([...totalMovies]);
      } catch (error) {
        console.log(error);

        setError(true);
      }
    })();
  }, []);

  if (error) {
    return <h1>Try Again!</h1>;
  }
  return (
    <>
      <header className="pt-5">
        <Header />
        <main className="mt-10 text-text-primary">
          <ContentFilters />

          <section className="mt-7">
            <div className="container mx-auto">
              {movies && (
                <div className="grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5 movies-page-movies-container">
                  {movies.map((item, index) => {
                    return (
                      <div key={index} className="group">
                        <Card {...item} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Movies;
