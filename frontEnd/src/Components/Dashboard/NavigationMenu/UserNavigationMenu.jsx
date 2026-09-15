import { NavLink, useNavigate } from "react-router";
import {
  FaHouse,
  FaHeart,
  FaBookmark,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import removeCookie from "../../../Utilities/Cookie/removeCookie";
import { useState } from "react";

function UserNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Overview",
      path: "/dashboard",
      icon: <FaHouse />,
    },
    {
      title: "Favorites",
      path: "favorites",
      icon: <FaHeart />,
    },
    {
      title: "Watchlist",
      path: "watchlist",
      icon: <FaBookmark />,
    },
    {
      title: "Setting",
      path: "settings",
      icon: <IoSettings />,
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
        className={`${isOpen ? "left-0! opacity-100" : "-left-60 opacity-0"} max-md:z-20 max-md:-left-60 md:left-0! md:opacity-100! transition-all duration-300 absolute left-0 h-full w-60 max-lg:w-55 border-l border-input-border/40 bg-input-bg px-4 py-6`}
      >
        <div className="mb-8 px-3">
          <h2 className="text-xl font-bold text-text-primary">Dashboard</h2>
          <p className="mt-1 text-xs text-text-secondary">
            Manage your account
          </p>
        </div>

        <nav className="space-y-2">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-cta-primary! text-white! mt-2 first:mt-0 flex cursor-pointer transition-colors duration-300 hover:text-text-primary/80 hover:bg-input-border/50 items-center gap-3 rounded-lg px-3 py-3 text-sm text-text-secondary/70"
                      : "mt-2 first:mt-0 flex cursor-pointer transition-colors duration-300 hover:text-text-primary/80 hover:bg-input-border/50 items-center gap-3 rounded-lg px-3 py-3 text-sm text-text-secondary/70"
                  }
                  end
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
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

export default UserNavigationMenu;
