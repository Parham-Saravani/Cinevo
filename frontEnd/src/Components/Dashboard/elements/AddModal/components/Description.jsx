function Description({ bannerDescription, overview, setter }) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">
        Description
      </h3>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Overview
          </label>
          <textarea
            value={overview}
            onInput={(event) =>
              setter((prev) => ({ ...prev, overview: event.target.value }))
            }
            rows="6"
            placeholder="Write a short description about the movie..."
            className="focus:border-input-border-focus transition-colors duration-300 w-full resize-none rounded-xl border border-input-border bg-input-bg p-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary">
            Banner Description
          </label>
          <textarea
            value={bannerDescription}
            onInput={(event) =>
              setter((prev) => ({ ...prev, bannerDescription: event.target.value }))
            }
            rows="6"
            placeholder="Description displayed on the hero banner..."
            className="focus:border-input-border-focus transition-colors duration-300 w-full resize-none rounded-xl border border-input-border bg-input-bg p-4 text-sm text-text-primary outline-none placeholder:text-text-secondary/50 focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
}

export default Description;
