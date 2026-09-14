import { NavLink, useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import {
  FaFilm,
  FaUsers,
  FaComments,
  FaGear,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { MdMovie, MdDashboard } from "react-icons/md";
import removeCookie from "../../../Utilities/Cookie/removeCookie";

function AdminNavigationMenu() {
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <MdDashboard />,
    },
    {
      title: "Movies",
      path: "movies",
      icon: <MdMovie />,
    },
    {
      title: "Series",
      path: "series",
      icon: <FaFilm />,
    },
    {
      title: "Users",
      path: "users",
      icon: <FaUsers />,
    },
    {
      title: "Comments",
      path: "comments",
      icon: <FaComments />,
    },
    {
      title: "Settings",
      path: "settings",
      icon: <FaGear />,
    },
  ];

  return (
    <aside className="absolute left-0 h-full w-60 border-l border-input-border/40 bg-input-bg px-4 py-6">
      <div className="mb-8 px-3">
        <h2 className="text-xl font-bold text-text-primary">Admin Panel</h2>
        <p className="mt-1 text-xs text-text-secondary">
          Manage platform content
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `mt-2 first:mt-0 flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors duration-300 ${
                isActive
                  ? "bg-cta-primary text-white"
                  : "text-text-secondary/70 hover:bg-input-border/50 hover:text-text-primary"
              }`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-6 left-4 right-4">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="w-full mt-2 first:mt-0 flex cursor-pointer transition-colors duration-300 hover:text-text-primary/80 hover:bg-input-border/50 items-center gap-3 rounded-lg px-3 py-3 text-sm text-text-secondary/70"
        >
          <FaHome />
          <span>Home</span>
        </button>
        <button
          onClick={() => {
            removeCookie("auth-token");
            navigate("/", { replace: true });
          }}
          className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-400 transition hover:bg-red-500/10"
        >
          <FaArrowRightFromBracket />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default AdminNavigationMenu;
