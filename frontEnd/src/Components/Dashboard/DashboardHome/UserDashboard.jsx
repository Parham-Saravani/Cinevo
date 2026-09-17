import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

function UserDashboard() {
  return (
    <section className="space-y-6 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-input-border/40 bg-input-bg p-6">
        <div className="relative z-10">
          <h1 className="mt-2 text-3xl font-bold text-text-primary max-sm:text-2xl">
            Ready for your next movie night?
          </h1>

          <p className="mt-2 max-w-lg text-sm text-text-secondary">
            Continue where you left off and discover new movies and series
            curated just for you.
          </p>

          <button className="mt-5 h-11 rounded-xl bg-cta-primary px-5 text-white">
            Resume Watching
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <div className="rounded-2xl bg-input-bg p-5">
          <p className="text-sm text-text-secondary">Favorites</p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary">24</h2>
        </div>

        <div className="rounded-2xl bg-input-bg p-5">
          <p className="text-sm text-text-secondary">Watchlist</p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary">18</h2>
        </div>

        <div className="rounded-2xl bg-input-bg p-5">
          <p className="text-sm text-text-secondary">Movies Watched</p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary">86</h2>
        </div>

        <div className="rounded-2xl bg-input-bg p-5">
          <p className="text-sm text-text-secondary">Series Watched</p>
          <h2 className="mt-2 text-3xl font-bold text-text-primary">31</h2>
        </div>
      </div>

      {/* Continue Watching */}
      <div className="rounded-2xl bg-input-bg p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              Continue Watching
            </h2>

            <p className="mt-1 text-xs text-text-secondary">
              Pick up where you left off.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-center gap-4 rounded-xl bg-bg-primary p-3">
            <div className="h-24 w-16 rounded-lg bg-input-border" />

            <div className="flex-1">
              <h3 className="font-medium text-text-primary">Stranger Things</h3>

              <p className="mt-1 text-sm text-text-secondary">
                Season 3 • Episode 4
              </p>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-input-border">
                <div className="h-full w-[62%] rounded-full bg-cta-primary" />
              </div>

              <p className="mt-2 text-xs text-text-secondary">62% watched</p>
            </div>

            <button className="rounded-lg bg-cta-primary px-4 py-2 text-sm text-white">
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Favorites
            </h2>
            <Link
              to={"favorites"}
              className="flex items-center gap-1.5 text-xs text-cta-primary transform-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>{" "}
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">Interstellar</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">The Dark Knight</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">Breaking Bad</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-input-bg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Watchlist
            </h2>
            <Link
              to={"watchlist"}
              className="flex items-center gap-1.5 text-xs text-cta-primary transform-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">Dune Part Two</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">Dark</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-16 w-12 rounded-lg bg-input-border" />
              <span className="text-text-primary">The Bear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
