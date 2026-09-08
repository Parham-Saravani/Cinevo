import { FaPlay } from "react-icons/fa6";

function Episodes({ currentSeason }) {
  return (
    <div className="mt-3 episodes-container">
      <div className="mt-3 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2">
        {currentSeason.episodes.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:border-input-border-focus transition-colors duration-300 flex justify-between items-center border border-input-border w-full rounded-xl px-3 py-3"
            >
              <div className="text-xs">
                <h5 className="text-text-primary line-clamp-1 mr-4">
                  {item.title}
                </h5>
                <p className="mt-1 text-text-secondary/70">
                  {item.releaseDate}
                </p>
              </div>
              <span className="text-text-primary bg-input-border/50 rounded-full px-1.5 py-1.5 inline-flex cursor-pointer hover:text-text-secondary transition-colors duration-300 hover:border-text-secondary">
                <FaPlay className="size-4 fill-current" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Episodes;
