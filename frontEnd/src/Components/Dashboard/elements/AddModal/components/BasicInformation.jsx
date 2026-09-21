function BasicInformation({
  setter,
  title,
  releaseYear,
  director,
  duration,
  rating,
  ageRating,
}) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">
        Basic Information
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Title
          </label>
          <input
            value={title}
            onInput={(event) =>
              setter((prev) => ({ ...prev, title: event.target.value }))
            }
            type="text"
            placeholder="Interstellar"
            className="h-11 w-full rounded-xl border border-input-border focus:border-input-border-focus transition-colors duration-300 bg-input-bg px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Release Year
          </label>
          <input
            value={releaseYear}
            onInput={(event) =>
              setter((prev) => ({ ...prev, releaseYear: event.target.value }))
            }
            type="text"
            placeholder="2014"
            className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Director
          </label>
          <input
            value={director}
            onInput={(event) =>
              setter((prev) => ({ ...prev, director: event.target.value }))
            }
            type="text"
            placeholder="Christopher Nolan"
            className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Duration
            <span className="text-xs text-text-secondary">
              (must be in minutes)
            </span>
          </label>
          <input
            value={duration}
            onInput={(event) =>
              setter((prev) => ({ ...prev, duration: event.target.value }))
            }
            type="text"
            placeholder="169"
            className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Rating
          </label>
          <input
            inputMode="numeric"
            value={rating}
            onInput={(event) =>
              setter((prev) => ({ ...prev, rating: event.target.value }))
            }
            type="text"
            step="0.1"
            placeholder="8.7"
            className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Age Rating
          </label>
          <input
            value={ageRating}
            onInput={(event) =>
              setter((prev) => ({ ...prev, ageRating: event.target.value }))
            }
            type="text"
            placeholder="PG-13"
            className="h-11 w-full rounded-xl border border-input-border bg-input-bg px-4 text-sm text-text-primary outline-none focus:border-input-border-focus transition-colors duration-300 placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
}

export default BasicInformation;
