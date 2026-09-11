import { Link } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

function ProfileDropDown({ logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("fadfs");
  }, []);
  const changeMenuStatus = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={changeMenuStatus}
        className="cursor-pointer flex items-center gap-3 bg-input-bg border border-input-border hover:border-input-border-hover px-2.5 py-1.5 rounded-full transition-colors duration-300"
      >
        <img
          src="/profile/default.webp"
          className="size-8 rounded-full object-cover"
          alt="Profile"
        />

        <div className="text-left">
          <p className="text-[14px] font-medium text-text-primary">Parham</p>
          <p className="text-xs text-text-secondary">Member</p>
        </div>
        <MdKeyboardArrowDown className="text-text-secondary size-5" />
      </button>

      <div
        className={`${isOpen ? "opacity-100 block" : "hidden opacity-0"} absolute text-text-secondary top-full right-0 mt-2 w-56 bg-input-bg border border-input-border rounded-xl overflow-hidden`}
      >
        <Link
          to="/dashboard"
          className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
        >
          Profile
        </Link>

        <Link
          to="/watchlist"
          className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
        >
          Watchlist
        </Link>

        <Link
          to="/favorites"
          className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
        >
          Favorites
        </Link>

        <Link
          to="/settings"
          className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-text-primary transition-colors duration-300"
        >
          Settings
        </Link>

        <button
          onClick={logOut}
          className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDropDown;
