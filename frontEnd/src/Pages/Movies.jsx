import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import { baseUrl } from "../Utilities/constants";
import ListCard from "../Components/Card/ListCard";
import LoadingCard from "../Components/Loader/LoadingCard";
import { useSearchParams } from "react-router";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState("All");
  const [currentGenre, setCurrentGenre] = useState("All");
  const [isClear, setIsClear] = useState(false);

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
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    setCurrentYear("All");
    setCurrentGenre("All");
  }, [isClear]);
  useEffect(() => {
    const filters = {};
    const year = searchParams.get("year");
    const genre = searchParams.get("genre");
    const type = searchParams.get("type");
    if (year) filters.year = year;
    if (genre) filters.genre = genre;
    if (type) filters.type = type;
    console.log(filters);

    setLoading(true);
  }, [searchParams]);

  
  const changeLayout = (value) => {
    setLayout(value);
  };

  if (error) {
    return <h1>Try Again!</h1>;
  }
  return (
    <>
      <header>
        <Header />
        <main className="mt-10 text-text-primary">
          <ContentFilters
            onClearSmash={setIsClear}
            currentYear={currentYear}
            currentGenre={currentGenre}
            setCurrentYear={setCurrentYear}
            setCurrentGenre={setCurrentGenre}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
            changeLayout={changeLayout}
            layout={layout}
            years={years}
            genres={genres}
          />

          <section className="mt-7">
            <div className="container mx-auto">
              <div
                className={`grid ${layout === "grid" ? "grid-cols-7" : "grid-cols-1"} max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5 movies-page-movies-container`}
              >
                {loading
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16].map(
                      (item, index) => {
                        return <LoadingCard key={index} />;
                      },
                    )
                  : movies.map((item, index) => {
                      return layout === "list" ? (
                        <ListCard key={item._id} {...item} />
                      ) : (
                        <div
                          key={index}
                          className="group rounded-xl overflow-hidden h-62"
                        >
                          <Card {...item} />
                        </div>
                      );
                    })}
              </div>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Movies;
