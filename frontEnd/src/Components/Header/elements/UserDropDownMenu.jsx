import { Link } from "react-router";

function UserDropDownMenu({ isOpen, onLogout }) {
  return (
    <div
      className={`${isOpen ? "opacity-100 block" : "hidden opacity-0"} absolute text-text-secondary top-full right-0 mt-2 w-56 bg-input-bg border border-input-border rounded-xl overflow-hidden`}
    >
      <Link
        to={"/dashboard"}
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Dashboard
      </Link>

      <Link
        to="/dashboard/watchlist"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Watchlist
      </Link>

      <Link
        to="/dashboard/favorites"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Favorites
      </Link>

      <Link
        to="/dashboard/settings"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Settings
      </Link>

      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default UserDropDownMenu;
