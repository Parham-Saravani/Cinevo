import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { useParams } from "react-router";
import ListCard from "../Components/Card/ListCard";
import LoadingCard from "../Components/Loader/LoadingCard";
import { baseUrl } from "../Utilities/constants";
import GenreSlider from "../Components/GenreSlider/GenreSlider";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";

function Genre() {
  const params = useParams();

  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [error, setError] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentGenre, setCurrentGenre] = useState("All");
  const [currentType, setCurrentType] = useState("All");
  const [currentYear, setCUrrentYear] = useState("All");

  const changeLayout = (value) => {
    setLayout(value);
  };
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

  const changeGenre = (value) => {
    setCurrentGenre(value);
  };

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
                changeLayout={changeLayout}
                setLayout={setLayout}
                layout={layout}
                isGenre={true}
                years={years}
                genres={genres}
                types={types}
              />
              <GenreSlider
                changeGenre={changeGenre}
                currentGenre={currentGenre}
                data={genres}
              />
            </div>
          </section>

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
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Genre;
