import { useState } from "react";

function Seasons({ value, setter }) {
  const [currentSeasonEpisodes, setCurrentSeasonEpisodes] = useState("");
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const registerNewSeason = (currentSeason, episodesCount) => {
    const newSeason = {
      title: `Season ${currentSeason}`,
      episodes: Array.from(
        { length: episodesCount },
        (_, index) => `Episode ${index + 1}`,
      ).map((name) => {
        return {
          title: name,
          releaseDate: "NA",
        };
      }),
    };
    setter((prev) => ({ ...prev, totalSeasons: [...value, newSeason] }));
    setIsSecondModalOpen(false);
    setCurrentSeasonEpisodes("");
  };
  const deleteSeason = (title) => {
    const newSeasons = value.filter((item) => item.title !== title);
    setter((prev) => ({ ...prev, totalSeasons: newSeasons }));
  };
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-text-primary text-lg font-semibold">Seasons</h3>

          <button
            onClick={() => setIsSecondModalOpen(true)}
            type="button"
            className="active:scale-95 text-cta-primary transition-all duration-300 hover:text-cta-primary/70 text-sm cursor-pointer"
          >
            + Add Season
          </button>
        </div>

        <div className="space-y-3 text-text-secondary">
          {value.length !== 0 ? (
            value.map((item) => {
              return (
                <div
                  key={item.episodes.length}
                  className="animate-fadeIn flex items-center justify-between rounded-xl border px-4 py-2 border-input-border"
                >
                  <div className="text-sm">
                    <h4>{item.title}</h4>
                    <span className="text-text-secondary/50 text-xs">
                      {item.episodes.length} Episodes
                    </span>
                  </div>

                  <div className="flex gap-2 text-xs *:px-2 *:py-1 *:rounded-xl *:active:scale-95 *:transition-all *:duration-300 *:cursor-pointer">
                    <button className="bg-cta-primary hover:bg-cta-primary/70 text-text-primary">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSeason(item.title)}
                      className="bg-red-500/10 rounded-xl hover:bg-red-500/20 text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-2">
              <h4 className="text-sm font-semibold text-text-primary">
                No seasons added yet
              </h4>

              <p className="mt-1 max-w-xs text-[10px] text-text-secondary">
                Add the seasons of this series to start adding episodes.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* second modal content */}

      <section
        className={`${isSecondModalOpen ? "fixed inset-0 z-400 bottom-0" : "hidden -z-400"} m-0! flex items-center justify-center bg-black/70`}
      >
        <div className="mt-4 rounded-2xl border border-input-border bg-input-bg p-5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="max-sm:text-xs  text-md font-semibold text-text-primary">
              {"Season " + (value.length + 1) + " Episodes"}
            </h4>
            <button
              onClick={() => {
                setIsSecondModalOpen(false);
                setCurrentSeasonEpisodes("");
              }}
              type="button"
              className="cursor-pointer flex text-xs h-7 w-7 items-center justify-center rounded-full text-text-secondary transition-colors duration-300 hover:bg-input-border/30 hover:text-text-primary"
            >
              ✕
            </button>
          </div>

          <input
            value={currentSeasonEpisodes}
            onInput={(event) => setCurrentSeasonEpisodes(event.target.value)}
            type="text"
            placeholder="Episodes count"
            className="max-sm:text-xs focus:border-input-border-focus transition-colors duration-300 h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none"
          />

          <button
            onClick={() => {
              if (currentSeasonEpisodes) {
                registerNewSeason(value.length + 1, currentSeasonEpisodes);
              }
            }}
            onKeyDown={(event) => {
              if (event.code === "Enter" && currentSeasonEpisodes) {
                registerNewSeason(value.length + 1, currentSeasonEpisodes);
              }
            }}
            type="submit"
            className="max-sm:text-xs cursor-pointer transition-colors duration-300 hover:bg-cta-primary/70 mt-4 w-full rounded-xl bg-cta-primary py-3 text-sm text-white"
          >
            Confirm
          </button>
        </div>
      </section>
    </>
  );
}

export default Seasons;
