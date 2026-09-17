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
import { useState } from "react";

function AdminNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer hidden max-md:inline-flex justify-center items-center absolute top-3 right-5 rounded-full border border-input-border hover:border-input-border/50 hover:bg-input-bg/50 transition-colors duration-300 px-1.5 py-3.5 w-fit"
      >
        <span
          className={`transition-all duration-300 relative w-5 h-0.75 ${isOpen ? "bg-transparent" : "bg-text-secondary"} rounded-full  ${isOpen ? "before:rotate-45 before:-translate-y-1.5" : ""} before:transition-all before:duration-300 before:absolute before:w-5 before:h-0.75 before:top-1.5 before:left-0 before:bg-text-secondary before:rounded-full ${isOpen ? "after:-rotate-45 after:translate-y-1.5" : ""} after:transition-all after:duration-300 after:absolute after:w-5 after:h-0.75 after:-top-1.5 after:left-0 after:bg-text-secondary after:rounded-full`}
        ></span>
      </button>
      <aside
        className={`${isOpen ? "left-0! opacity-100!" : "-left-60 opacity-0"} z-50 border-r border-input-border max-md:z-20 max-md:-left-60 md:left-0! md:opacity-100! transition-all duration-300 absolute left-0 h-full w-60 max-lg:w-55 border-l bg-input-bg px-4 py-6`}
      >
        <div className="mb-8 px-3">
          <h2 className="text-xl font-bold text-text-primary">Admin Panel</h2>
          <p className="mt-1 text-xs text-text-secondary">
            Manage platform content
          </p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              replace
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
    </>
  );
}

export default AdminNavigationMenu;
