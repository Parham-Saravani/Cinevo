import { useEffect, useState } from "react";
import { baseUrl } from "../../../Utilities/constants";
import LoadingCard from "../../Loader/LoadingCard";
import ContentCard from "../elements/ContentCard";

function AdminMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/movies`);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <section className="space-y-5 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">Movies</h1>

        <button className="bg-cta-primary text-text-primary px-5 py-3 rounded-xl text-sm cursor-pointer hover:bg-cta-primary/70 transition-colors duration-300">
          Add Movie
        </button>
      </div>

      <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
        <p className="text-text-secondary max-sm:text-xs">
          Manage all movies available on Cinevo.
        </p>
      </div>
      <div className="grid gap-3 grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-3">
        {movies.length === 0
          ? Array.from({ length: 6 }).map((_, index) => {
              return <LoadingCard key={index} />;
            })
          : movies.map((item) => {
              return <ContentCard key={item._id} {...item} />;
            })}
      </div>
    </section>
  );
}
export default AdminMovies;
