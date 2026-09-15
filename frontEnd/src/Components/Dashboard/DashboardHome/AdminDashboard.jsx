import { FaUsers, FaFilm, FaComments } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";

function AdminDashboard() {
  return (
    <section className="animate-fadeIn">
      <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
        Dashboard Overview
      </h1>

      <p className="mt-2 max-sm:text-sm text-text-secondary">
        Monitor platform activity and content statistics.
      </p>

      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-8">
        <div className="flex justify-between items-center rounded-xl bg-input-bg p-5">
          <div>
            <h3 className="text-text-secondary">Movies</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">120</p>
          </div>
          <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-blue-500/10 items-center justify-center rounded-xl bg-primary/10">
            <MdMovie className="text-blue-600 text-2xl max-sm:text-xl" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
          <div>
            <h3 className="text-text-secondary">Series</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">80</p>
          </div>
          <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-yellow-500/10 items-center justify-center rounded-xl bg-primary/10">
            <FaFilm className="text-yellow-600 text-2xl max-sm:text-xl" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
          <div>
            <h3 className="text-text-secondary">Users</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">340</p>
          </div>
          <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-pink-500/10 items-center justify-center rounded-xl bg-primary/10">
            <FaUsers className="text-pink-600 text-2xl max-sm:text-xl" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
          <div>
            <h3 className="text-text-secondary">Comments</h3>
            <p className="mt-2 text-3xl font-bold text-text-primary">1520</p>
          </div>
          <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-purple-500/10 items-center justify-center rounded-xl bg-primary/10">
            <FaComments className="text-purple-600 text-2xl max-sm:text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
