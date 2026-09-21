import { useState } from "react";
import Toast from "../../../../Toast/Toast";
function Genres({ data: { value, setter } }) {
  const [genre, setGenre] = useState("");
  const removeGenreItem = (id) => {
    const newData = value.filter((item) => item.id !== id);
    setter((prev) => ({ ...prev, genres: newData }));
  };

  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">Genres</h3>

      <div className="flex gap-2">
        <input
          value={genre}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (!genre) {
                Toast({ children: "Please enter a genre first" });
                return;
              }
              setGenre("");
              setter((prev) => ({
                ...prev,
                genres: [...value, { id: crypto.randomUUID(), title: genre }],
              }));
            }
          }}
          onInput={(event) => setGenre(event.target.value)}
          type="text"
          placeholder="e.g. Sci-Fi"
          className="focus:border-input-border-focus transition-colors duration-300 h-11 flex-1 rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
        />

        <button
          onClick={() => {
            if (!genre) {
              Toast({ children: "Please enter a genre first" });
              return;
            }
            setGenre("");
            setter((prev) => ({
              ...prev,
              genres: [...value, { id: crypto.randomUUID(), title: genre }],
            }));
          }}
          type="button"
          className="rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
        >
          Add
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {value.map((item) => {
          return (
            <span
              key={item.id}
              className="animate-fadeIn flex items-center gap-2 rounded-lg bg-input-bg/50 text-text-secondary   px-3 py-1.5 text-sm text-primary"
            >
              {item.title}
              <button
                onClick={() => removeGenreItem(item.id)}
                className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                type="button"
              >
                ✕
              </button>
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default Genres;
