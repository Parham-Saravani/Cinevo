import { FaUsers, FaFilm, FaComments, FaArrowRight } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router";
import { Area, Line, XAxis, YAxis, CartesianGrid, AreaChart } from "recharts";
import { useLoaderData } from "react-router";
import { Pie, PieChart, Tooltip } from "recharts";
import defaultProfilImage from "../../../../public/profile/default.webp";
import FormatTimeAgo from "../../../Utilities/FormatTimeAgo/FormatTimeAgo";

const lineChartData = [
  { day: "Saturday", views: 1250 },
  { day: "Sunday", views: 1680 },
  { day: "Monday", views: 1420 },
  { day: "Tuesday", views: 2150 },
  { day: "Wednesday", views: 2840 },
  { day: "Thursday", views: 3520 },
  { day: "Friday", views: 3180 },
];
function AdminDashboard() {
  const { stats, recentData } = useLoaderData();
  console.log(recentData);

  const pieChartData = [
    { name: "movies", value: stats.moviesCount, fill: "#7c4dff" },
    { name: "series", value: stats.seriesCount, fill: "#155dfc" },
  ];

  return (
    <main className="space-y-5">
      <section className="animate-fadeIn space-y-5">
        <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
          Dashboard Overview
        </h1>
        <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
          <p className="max-sm:text-sm text-text-secondary">
            Monitor platform activity and content statistics.
          </p>
        </div>

        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-8">
          <div className="flex justify-between items-center rounded-xl bg-input-bg p-5">
            <div>
              <h3 className="text-text-secondary">Movies</h3>

              <p className="mt-2 text-3xl font-bold text-text-primary">
                {stats.moviesCount}
              </p>
            </div>
            <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-blue-500/10 items-center justify-center rounded-xl bg-primary/10">
              <MdMovie className="text-blue-600 text-2xl max-sm:text-xl" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
            <div>
              <h3 className="text-text-secondary">Series</h3>

              <p className="mt-2 text-3xl font-bold text-text-primary">
                {stats.seriesCount}
              </p>
            </div>
            <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-yellow-500/10 items-center justify-center rounded-xl bg-primary/10">
              <FaFilm className="text-yellow-600 text-2xl max-sm:text-xl" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
            <div>
              <h3 className="text-text-secondary">Users</h3>

              <p className="mt-2 text-3xl font-bold text-text-primary">
                {stats.usersCount}
              </p>
            </div>
            <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-pink-500/10 items-center justify-center rounded-xl bg-primary/10">
              <FaUsers className="text-pink-600 text-2xl max-sm:text-xl" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-input-bg p-5">
            <div>
              <h3 className="text-text-secondary">Comments</h3>
              <p className="mt-2 text-3xl font-bold text-text-primary">
                {stats.commentsCount}
              </p>
            </div>
            <div className="flex h-13 w-13 max-sm:h-11 max-sm:w-11 bg-purple-500/10 items-center justify-center rounded-xl bg-primary/10">
              <FaComments className="text-purple-600 text-2xl max-sm:text-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 max-lg:grid-cols-1 max-md:grid-cols-12 max-sm:grid-cols-1 gap-5">
        <div className="col-span-5 max-xl:col-span-4 max-md:col-span-4 max-lg:col-span-1 max-sm:col-span-1 h-80 max-sm:h-70 px-4 py-3 bg-input-bg rounded-xl">
          <h2 className="text-text-primary font-bold text-lg max-xl:text-center max-lg:text-left max-md:text-center max-sm:text-left">
            Content Distribution
          </h2>
          <div className="w-full h-full flex max-xl:flex-col max-lg:flex-row max-md:flex-col max-sm:flex-row items-center max-lg:pr-10">
            <PieChart
              responsive
              className="w-full h-full max-xl:h-55 max-md:h-50 max-xl:ml-10 max-md:ml-15 max-sm:ml-0"
            >
              <Pie
                data={pieChartData}
                dataKey="value"
                innerRadius="60%"
                cx="40%"
                cy="47%"
                stroke="transparent"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d1223",
                  boxShadow: "0 0 10px rgba(0 0 0 / 0.5",
                  border: "none",
                  borderRadius: ".7rem",
                }}
                itemStyle={{ color: "white", fontSize: "12px" }}
              />
            </PieChart>
            <ul className=" text-text-primary space-y-1 max-md:ml-14">
              {pieChartData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-between w-40 text-sm"
                  >
                    <span
                      className={`relative before:absolute before:w-3 before:h-3 before:top-0 before:bottom-0 before:my-auto before:-left-4.5 ${item.name === "movies" ? "before:bg-cta-primary" : "before:bg-blue-600"} before:rounded-full`}
                    >
                      {item.name}
                    </span>
                    <div className="flex text-text-secondary">
                      <p>{item.value}</p>
                      <p className="ml-3">28%</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-7 max-xl:col-span-8 max-md:col-span-8 max-lg:col-span-1 w-full max-sm:col-span-1 h-80 space-y-1 max-sm:h-70 pt-3 pb-7  bg-input-bg rounded-xl">
          <div className="flex justify-between items-center px-4 text-text-primary font-bold">
            <p className="text-lg">Platform Activity</p>
            <div className="text-xs flex gap-8">
              <span className="relative before:absolute before:w-4 before:h-1.5 before:top-0.5 before:bottom-0 before:my-auto before:-left-5 before:bg-cta-primary before:rounded-full">
                movies
              </span>
              <span className="relative before:absolute before:w-4 before:h-1.5 before:top-0.5 before:bottom-0 before:my-auto before:-left-5 before:bg-blue-600 before:rounded-full">
                series
              </span>
            </div>
          </div>
          <AreaChart
            data={lineChartData}
            style={{ height: "100%", width: "100%", paddingRight: "1rem" }}
            responsive
          >
            <XAxis
              dataKey="day"
              interval={0}
              textAnchor="0"
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
            />
            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 10 }}
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;

                return (
                  <div className="rounded-xl bg-bg-primary px-4 py-3">
                    <p className="text-white">{label}</p>
                    <p className="text-gray-400 text-sm">
                      Views: {payload[0].value}
                    </p>
                  </div>
                );
              }}
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke="none"
              fill="#7c4dff"
              fillOpacity={0.15}
            />
            <Line
              stroke="#7c4dff"
              strokeWidth={3}
              type="monotone"
              dataKey="views"
              dot={{
                r: 7,
                strokeWidth: "0",
                fill: "#7c4dff",
              }}
            />
            <CartesianGrid stroke="#1F2937" />
          </AreaChart>
        </div>
      </section>

      <section className="grid grid-cols-12 max-xl:grid-cols-4 max-lg:grid-cols-1 max-md:grid-cols-4 max-sm:grid-cols-1 gap-5">
        {/* Movies */}
        <div className="col-span-4 max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-1 max-md:col-span-2 bg-input-bg rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="max-sm:text-[16px] text-lg font-bold text-text-primary">
              Latest Movies
            </h2>

            <Link
              to={"movies"}
              className="flex items-center gap-1.5 text-xs text-cta-primary transform-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="space-y-4">
            {recentData.lastMovies.map((movie) => (
              <div
                key={movie._id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-14 h-17 rounded-lg "
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-text-primary">
                      {movie.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {movie.genres.slice(0, 2).map((genre) => (
                        <span
                          key={genre}
                          className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-text-secondary"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] flex justify-center items-center bg-bg-primary/50 text-text-secondary rounded-full max-w-20 px-1.5 py-1.5 truncate">
                  {FormatTimeAgo(movie.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Series */}
        <div className="col-span-4 max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-1 max-md:col-span-2 bg-input-bg rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="max-sm:text-[16px] text-lg font-bold text-text-primary">
              Latest Series
            </h2>
            <Link
              to={"series"}
              className="flex items-center gap-1.5 text-xs text-cta-primary transform-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="space-y-4">
            {recentData.lastSeries.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-14 h-17 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-text-primary">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.genres.slice(0, 2).map((genre) => (
                        <span
                          key={genre}
                          className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-text-secondary"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] flex justify-center items-center bg-bg-primary/50 text-text-secondary rounded-full max-w-20 px-1.5 py-1.5 truncate">
                  {FormatTimeAgo(item.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Users */}
        <div className="col-span-4 max-lg:col-span-1 max-md:col-span-full max-sm:col-span-1 bg-input-bg rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="max-sm:text-[16px] text-lg font-bold text-text-primary">
              Recent Users
            </h2>

            <Link
              to={"users"}
              className="flex items-center gap-1.5 text-xs text-cta-primary transform-colors duration-300 hover:text-cta-primary/70"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="space-y-4">
            {recentData.lastUsers.map((user) => (
              <div key={user._id} className="flex items-center gap-3">
                <img
                  src={
                    user.imageUrl !== null ? user.imageUrl : defaultProfilImage
                  }
                  alt={user.username}
                  className="size-9 max-sm:size-7 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="max-sm:text-xs font-medium text-text-primary">
                    {user.username}
                  </h3>

                  <p className="text-sm max-sm:text-xs text-text-secondary truncate max-sm:max-w-40 max-w-50">
                    {user.email}
                  </p>
                </div>

                <span
                  className={`max-w-14 truncate text-xs px-2 py-1 rounded-full ${user.role === "admin" ? "bg-cta-primary/10 text-cta-primary" : "bg-blue-500/10 text-blue-500"}`}
                >
                  {user.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;
