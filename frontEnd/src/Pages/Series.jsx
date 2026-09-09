import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ContentFilters from "../Components/ContentFilters/ContentFilters";
import Card from "../Components/Card/Card";
import { baseUrl } from "../Utilities/constants";

function Series() {
  const [series, setSeries] = useState([]);
  const [years, setYears] = useState(null);
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(false);

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
        console.log(error);

        setError(true);
      }
    })();
  }, []);

  if(error){
    return <h1>Try Again!</h1>
  }
  return (
    <>
      <header className="pt-5">
        <Header />
        <main className="mt-10 text-text-primary">
          <ContentFilters />

          <section className="mt-7">
            <div className="container mx-auto">
              <div className="grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5 movies-page-movies-container">
                {series.map((item, index) => {
                  return (
                    <div key={index} className="group">
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
