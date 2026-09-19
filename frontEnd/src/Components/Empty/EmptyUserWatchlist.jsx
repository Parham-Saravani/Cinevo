import { FaBookmark } from "react-icons/fa6";

function EmptyWatchlist() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-input-border/30">
        <FaBookmark className="text-3xl text-text-secondary" />
      </div>

      <h2 className="mb-3 text-2xl font-bold text-text-primary">
        Your watchlist is empty
      </h2>

      <p className="mb-8 max-w-md leading-7 text-text-secondary">
        Save movies and series to your watchlist so you can watch them later.
      </p>
    </div>
  );
}

export default EmptyWatchlist;
