import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import { baseUrl } from "../Utilities/constants";
import ListCard from "../Components/Card/ListCard";
import LoadingCard from "../Components/Loader/LoadingCard";

function Series() {
  const [series, setSeries] = useState([]);
  const [years, setYears] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Series | Cinevo";
    (async () => {
      try {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/series`),
          fetch(`${baseUrl}/api/series/genre`),
          fetch(`${baseUrl}/api/series/year`),
        ]);
        response.forEach((item) => {
          if (!item.ok) {
            throw Error();
          }
        });
        const [totalSeries, genres, years] = await Promise.all(
          response.map((res) => res.json()),
        );
        setYears([...years]);
        setGenres([...genres]);
        setSeries([...totalSeries]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const changeLayout = (value) => {
    setLayout(value);
  };

  if (error) {
    return <h1>Try Again!</h1>;
  }
  return (
    <>
      <header className="pt-5">
        <Header />
        <main className="mt-10 text-text-primary">
          <ContentFilters
            changeLayout={changeLayout}
            layout={layout}
            years={years}
            genres={genres}
          />

          <section className="mt-7">
            <div className="container mx-auto">
              <div
                className={`grid ${layout === "grid" ? "grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3" : "grid-cols-1"} gap-5 movies-page-movies-container`}
              >
                {loading
                  ? [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16].map(
                      (item, index) => {
                        return <LoadingCard key={index} />;
                      },
                    )
                  : series.map((item, index) => {
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

export default Series;
