import { FaHeart, FaBookmark } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";

function UserDashboard() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
          Overview
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Welcome back. Here's what's happening with your account.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Favorites</p>

              <h2 className="mt-2 text-3xl font-bold text-text-primary">24</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <FaHeart />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Watchlist</p>

              <h2 className="mt-2 text-3xl font-bold text-text-primary">18</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <FaBookmark />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Watched</p>

              <h2 className="mt-2 text-3xl font-bold text-text-primary">42</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <IoPlayCircle />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5 xl:col-span-2">
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

          <div className="mt-5 space-y-4">{/* Movie / Series items */}</div>
        </div>

        <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Recent Activity
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            Your latest activity.
          </p>

          <div className="mt-5 space-y-5">{/* Activity items */}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-input-border/40 bg-input-bg/40 p-5">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            Recommended For You
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            Movies and series you might enjoy.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {/* Movie cards */}
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
