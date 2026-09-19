import { Link, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { FaArrowRight, FaBookmark, FaHeart, FaFilm } from "react-icons/fa6";

function UserDashboard() {
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const data = useLoaderData();

  const ContentItem = ({ poster, title }) => {
    return (
      <div className="flex items-center gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-input-border/10">
        <img
          src={poster}
          alt={title}
          className="h-16 w-12 rounded-lg bg-input-border object-cover"
        />
        <span className="line-clamp-1 text-text-primary">{title}</span>
      </div>
    );
  };

  useEffect(() => {
    if (data.length) {
      setWatchlist(data[0]);
      setFavorites(data[1]);
    }
  }, []);

  return (
    <section className="animate-fadeIn space-y-6">
      <div className="overflow-hidden rounded-2xl border border-input-border/40 bg-input-bg p-6">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-cta-primary/15 px-3 py-1 text-xs font-medium text-cta-primary">
            Cinevo Dashboard
          </span>

          <div>
            <h1 className="text-3xl font-bold text-text-primary max-sm:text-2xl">
              Your movie collection
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
              Manage your favorites, organize your watchlist, and keep track of
              everything you want to watch next.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">Favorites</p>

            <div className="rounded-lg bg-red-500/10 p-2">
              <FaHeart className="text-red-400" />
            </div>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-text-primary">
            {favorites.length}
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            Saved favorite titles
          </p>
        </div>

        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">Watchlist</p>

            <div className="rounded-lg bg-cta-primary/10 p-2">
              <FaBookmark className="text-cta-primary" />
            </div>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-text-primary">
            {watchlist.length}
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            Titles waiting to be watched
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Favorites */}
        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Favorites
            </h2>

            <Link
              to="favorites"
              className="flex items-center gap-1.5 text-xs text-cta-primary transition-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {favorites.length ? (
              favorites.map((item, index) => (
                <ContentItem key={index} {...item} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FaHeart className="text-5xl text-text-secondary/40" />

                <h3 className="mt-5 text-lg font-semibold text-text-primary">
                  No favorites yet
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-text-secondary">
                  Movies and series you love will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Watchlist */}
        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Watchlist
            </h2>

            <Link
              to="watchlist"
              className="flex items-center gap-1.5 text-xs text-cta-primary transition-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {watchlist.length ? (
              watchlist.map((item, index) => (
                <ContentItem key={index} {...item} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FaBookmark className="text-5xl text-text-secondary/40" />

                <h3 className="mt-5 text-lg font-semibold text-text-primary">
                  Your watchlist is empty
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-text-secondary">
                  Save titles to watch them whenever you're ready.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
