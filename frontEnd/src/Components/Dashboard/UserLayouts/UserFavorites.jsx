import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import UserFavoriteItem from "../elements/UserFavoriteItem";
import EmptyFavorites from "../../Empty/EmptyUserFavorites";
function UserFavorites() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(false);

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    if (data) {
      setContent(data);
      return;
    }
    setError(true);
  }, []);

  if (error) {
    return <h1>We Got Error!</h1>;
  }

  return (
    <section className="space-y-6 animate-fadeIn">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
            Favorites
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            Your favorite movies and series collection.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Movies</p>
            <p className="mt-1 text-xl font-bold text-text-primary">
              {content.filter((item) => item.type === "movie").length}
            </p>
          </div>

          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Series</p>
            <p className="mt-1 text-xl font-bold text-text-primary">
              {content.filter((item) => item.type === "series").length}
            </p>
          </div>

          <div className="rounded-xl bg-input-bg px-4 py-3">
            <p className="text-xs text-text-secondary">Total</p>
            <p className="mt-1 text-xl font-bold text-text-primary">
              {content.length}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-input-bg p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search favorites..."
            className="h-11 w-full lg:max-w-sm rounded-xl border border-input-border bg-bg-primary px-4 text-text-primary outline-hidden"
          />

          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-cta-primary px-4 py-2 text-sm text-white">
              All
            </button>

            <button className="rounded-lg border border-input-border px-4 py-2 text-sm text-text-secondary">
              Movies
            </button>

            <button className="rounded-lg border border-input-border px-4 py-2 text-sm text-text-secondary">
              Series
            </button>
          </div>
        </div>
      </div>

      {content.length !== 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {content.map((item) => (
            <UserFavoriteItem key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <EmptyFavorites />
      )}
    </section>
  );
}

export default UserFavorites;
