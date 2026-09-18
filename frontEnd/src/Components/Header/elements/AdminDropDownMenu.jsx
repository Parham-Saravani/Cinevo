import { Link } from "react-router";

function AdminDropDownMenu({isOpen , onLogout}) {
  return (
    <div
      className={`${isOpen ? "opacity-100 block" : "hidden opacity-0"} z-100 absolute text-text-secondary top-full right-0 mt-2 w-56 bg-input-bg border border-input-border rounded-xl overflow-hidden`}
    >
      <Link
        to={"/admin"}
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Dashboard
      </Link>

      <Link
        to="/admin/movies"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Movies
      </Link>

      <Link
        to="/admin/series"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Series
      </Link>
      <Link
        to="/admin/users"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Users
      </Link>
      <Link
        to="/admin/comments"
        className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
      >
        Comments
      </Link>
      <Link
        to="/admin/settings"
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

export default AdminDropDownMenu;
