import { FaHeart } from "react-icons/fa6";

function EmptyFavorites() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-input-border/30">
        <FaHeart className="text-3xl text-text-secondary" />
      </div>

      <h2 className="mb-3 text-2xl font-bold text-text-primary">
        No favorites yet
      </h2>

      <p className="mb-8 max-w-md leading-7 text-text-secondary">
        You haven't added any movies or series to your favorites.
      </p>
    </div>
  );
}

export default EmptyFavorites;
