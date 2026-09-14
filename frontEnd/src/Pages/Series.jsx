import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import { baseUrl } from "../Utilities/constants";
import ListCard from "../Components/Card/ListCard";
import LoadingCard from "../Components/Loader/LoadingCard";
import { useSearchParams, useNavigate } from "react-router";
import EmptyFiltering from "../Components/Empty/EmptyFiltering";
import filtering from "../Utilities/Filtering/Filtering";

function Series() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [series, setSeries] = useState([]);
  const [years, setYears] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState("All");
  const [currentGenre, setCurrentGenre] = useState("All");
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    document.title = "Series | Cinevo";
    setSearchParams({});

    (async () => {
      try {
        const response = await Promise.all([
          fetch(`${baseUrl}/api/series`),
          fetch(`${baseUrl}/api/series/genre`),
          fetch(`${baseUrl}/api/series/year`),
        ]);
        // response.forEach((item) => {
        //   if (!item.ok) {
        //     throw Error();
        //   }
        // });
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
  useEffect(() => {
    setCurrentYear("All");
    setCurrentGenre("All");
  }, [isClear]);
  useEffect(() => {
    (async () => {
      const data = await filtering(
        setLoading,
        "series",
        setSeries,
        searchParams,
      );
      console.log(data);
    })();
  }, [searchParams]);

  const changeLayout = (value) => {
    setLayout(value);
  };

  if (error) {
    return navigate("/error", {
      state: {
        hideStatusCode: true,
        title: "Connection Failed",
        desc: "Cinevo couldn't connect to the server. Please check your internet connection and make sure your VPN is enabled if you're accessing the service from a restricted region.",
      },
    });
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
              {!loading && series.length === 0 ? (
                <EmptyFiltering />
              ) : (
                <div
                  className={`grid ${layout === "grid" ? "grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3" : "grid-cols-1"} gap-5 movies-page-movies-container`}
                >
                  {loading
                    ? Array.from({ length: 7 }).map((item, index) => {
                        return <LoadingCard key={index} />;
                      })
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
              )}
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Series;
