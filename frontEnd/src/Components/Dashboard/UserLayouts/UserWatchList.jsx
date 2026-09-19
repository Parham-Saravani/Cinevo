import { useEffect, useState } from "react";
import EmptyWatchlist from "../../Empty/EmptyUserWatchlist";
import { useLoaderData } from "react-router";
import UserWatchListItem from "../elements/UserWatchlistItem";

function UserWatchList() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(false);
  const data = useLoaderData();

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
            Watchlist
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            Movies and series you've saved to watch later.
          </p>
        </div>

        <div className="rounded-xl bg-input-bg px-4 py-3">
          <p className="text-xs text-text-secondary">Total Items</p>

          <p className="mt-1 text-xl font-bold text-text-primary">
            {content.length}
          </p>
        </div>
      </div>

      {content.length !== 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {content.map((item) => (
            <UserWatchListItem key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <EmptyWatchlist />
      )}
    </section>
  );
}

export default UserWatchList;
