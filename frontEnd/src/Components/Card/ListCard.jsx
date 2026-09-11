import { Link } from "react-router";
import { HiStar, HiCalendar, HiClock, HiFire } from "react-icons/hi";
import { MdMovie, MdTv } from "react-icons/md";
import { MdOutlinePlaylistPlay, MdWorkspacePremium } from "react-icons/md";
import { LuClapperboard } from "react-icons/lu";

function ListCard({
  poster,
  type,
  title,
  slug,
  genres,
  rating,
  bannerDescription,
  releaseYear,
  duration,
  ageRating,
  seasons,
  director,
  featured,
  trending,
}) {
  return (
    <div className="animate-fadeIn col-span-1 max-sm:flex-col max-sm:items-center group flex items-center gap-5 rounded-xl border border-input-border/50 p-4 transition-all duration-300 hover:border-input-border-focus">
      <Link
        to={type === "movie" ? `/movie/${slug}` : `/serie/${slug}`}
        className="shrink-0"
      >
        <img
          src={poster}
          alt={title}
          className="h-50 w-38 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex max-sm:flex-col max-sm:items-center items-start justify-between gap-4">
          <div>
            <Link to={type === "movie" ? `/movie/${slug}` : `/serie/${slug}`}>
              <h3 className="text-xl max-sm:text-center font-bold transition-colors hover:text-cta-primary">
                {title}
              </h3>
            </Link>

            <div className="mt-2 max-sm:justify-center flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-input-bg px-2 py-1 max-md:text-[10px] text-xs text-text-secondary"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-yellow-500/10 px-2.5 py-1 max-md:text-[12px] text-sm font-semibold text-yellow-500">
            <HiStar className="size-4" /> {rating}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 max-sm:text-center line-clamp-2 max-md:text-xs text-sm leading-6 text-text-secondary">
          {bannerDescription}
        </p>

        {/* Meta */}
        <div className="mt-4 flex max-sm:justify-center flex-wrap gap-x-2 gap-y-2 max-md:text-[10px] text-sm text-text-secondary/70">
          <span className="flex items-center bg-gray-900/40 px-2 py-1 rounded-md">
            <HiCalendar className="size-4 mr-1 fill-cta-primary" />
            {releaseYear}
          </span>

          <span className="flex items-center bg-gray-900/40 px-2 py-1 rounded-md">
            <HiClock className="size-4 mr-1 fill-cta-primary" />
            {duration} min
          </span>

          <span className="flex items-center bg-gray-900/40 px-2 py-1 rounded-md">
            <MdMovie className="size-4 mr-1 fill-cta-primary" />
            {ageRating}
          </span>

          {type === "series" ? (
            <span className="flex items-center bg-gray-900/40 px-2 py-1 rounded-md">
              <MdOutlinePlaylistPlay className="size-4.5 mr-1 fill-cta-primary" />
              {seasons.length} Seasons
            </span>
          ) : null}
        </div>

        {/* Director + Badges */}
        <div className="mt-auto flex max-sm:flex-col items-center justify-between pt-4">
          <p className="flex items-center max-md:text-xs text-sm text-text-secondary">
            <LuClapperboard className="mr-1 size-4" />
            Directed by
            <span className="ml-1 font-medium text-text-primary">
              {director}
            </span>
          </p>

          <div className="flex gap-2">
            {featured && (
              <span className="max-sm:mt-3 flex items-center rounded-lg bg-blue-500/10 px-2.5 py-1 max-md:text-[10px] text-xs font-medium text-blue-400">
                <MdWorkspacePremium className="size-4 mr-1" />
                Featured
              </span>
            )}

            {trending && (
              <span className="max-sm:mt-3 flex items-center rounded-lg bg-orange-500/10 px-2.5 py-1 max-md:text-[10px] text-xs font-medium text-orange-400">
                <HiFire className="size-4 mr-1" />
                Trending
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
