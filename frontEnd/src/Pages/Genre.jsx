import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { useSearchParams } from "react-router";
import ListCard from "../Components/Card/ListCard";
import LoadingCard from "../Components/Loader/LoadingCard";
import { baseUrl } from "../Utilities/constants";
import GenreSlider from "../Components/GenreSlider/GenreSlider";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import EmptyFiltering from "../Components/Empty/EmptyFiltering";

function Genre() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [error, setError] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isCleared, setIsCleared] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentType, setCurrentType] = useState("All");
  const [currentYear, setCurrentYear] = useState("All");

  const changeLayout = (value) => {
    setLayout(value);
  };

  useEffect(() => {
    setCurrentGenre("All");
    setCurrentType("All");
    setCurrentYear("All");
  }, [isCleared]);
  useEffect(() => {
    document.title = "Genres | Cinevo";
    (async () => {
      try {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/discover/genre`),
          fetch(`${baseUrl}/api/discover/all`),
          fetch(`${baseUrl}/api/discover/types`),
          fetch(`${baseUrl}/api/discover/year`),
        ]);
        const [genres, allContent, types, year] = await Promise.all(
          response.map((res) => res.json()),
        );
        setContent([...allContent]);
        setGenres([...genres]);
        setYears([...year]);
        setTypes([...types]);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
  useEffect(() => {
    const filters = {};
    const year = searchParams.get("year");
    const genre = searchParams.get("genre");
    const type = searchParams.get("type");
    if (year) filters.year = year;
    if (genre) filters.genre = genre;
    if (type) filters.type = type;
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/discover/filter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        });
        if (!response.ok) throw Error();
        const data = await response.json();
        console.log(data);

        setContent([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchParams]);

  return (
    <>
      <header>
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
              <ContentFilters
                currentType={currentType}
                currentYear={currentYear}
                onClearSmash={setIsCleared}
                searchParams={searchParams}
                setCurrentType={setCurrentType}
                setCurrentYear={setCurrentYear}
                setSearchParams={setSearchParams}
                changeLayout={changeLayout}
                setLayout={setLayout}
                layout={layout}
                isGenre={true}
                years={years}
                genres={genres}
                types={types}
              />
              <GenreSlider
                currentGenre={currentGenre}
                setCurrentGenre={setCurrentGenre}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                data={genres}
              />
            </div>
          </section>

          <section className="mt-7">
            <div className="container mx-auto">
              {content.length === 0 ? (
                <EmptyFiltering />
              ) : (
                <div
                  className={`grid ${layout === "grid" ? "grid-cols-7" : "grid-cols-1"} max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5 movies-page-movies-container`}
                >
                  {loading
                    ? Array.from({length:7}).map(
                        (item, index) => {
                          return <LoadingCard key={index} />;
                        },
                      )
                    : content.map((item, index) => {
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
              )}
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Genre;
