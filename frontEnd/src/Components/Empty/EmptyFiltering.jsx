import { FaFilm } from "react-icons/fa";

function EmptyFiltering() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="w-20 h-20 rounded-full bg-input-border/30 flex items-center justify-center mb-6">
        <FaFilm className="text-3xl text-text-secondary" />
      </div>

      <h2 className="text-2xl font-bold text-text-primary mb-3">
        No content found
      </h2>

      <p className="max-w-md text-text-secondary leading-7 mb-8">
        We couldn't find any movies or series matching your selected filters.
        Try changing the genre, year, or content type.
      </p>
    </div>
  );
}

export default EmptyFiltering;
