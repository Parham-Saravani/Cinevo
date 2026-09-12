import { Link } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import getCookie from "../../../Utilities/Cookie/getCookie";
import { baseUrl } from "../../../Utilities/constants";
import removeCookie from "../../../Utilities/Cookie/removeCookie";
import Toast from "../../Toast/Toast";

function ProfileDropDown({ logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = getCookie("auth-token");
    if (!token) {
      setIsLoading(false);
      setError(true);
      return;
    }
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/user/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        console.log(response);

        if (!response.ok) throw Error();
        const data = await response.json();
        if (data.message === "INVALID_TOKEN") {
          throw Error("Invalid token. Please log in again.");
        } else if (data.message === "INVALID_DATA") {
          throw Error("Invalid user data.");
        }
        setUserData({ ...data });
      } catch (error) {
        Toast({ children: error.message });
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const changeMenuStatus = () => {
    setIsOpen(!isOpen);
  };
  if (isLoading) {
    return (
      <div className="h-12.75 w-40 bg-gray-900 animate-pulse rounded-full"></div>
    );
  }
  if (error) {
    removeCookie("auth-token");
    return;
  }
  return (
    <div className="relative">
      <button
        onClick={changeMenuStatus}
        className="max-w-40 cursor-pointer flex items-center gap-3 bg-input-bg border border-input-border hover:border-input-border-hover px-2.5 py-1.5 rounded-full transition-colors duration-300"
      >
        <img
          src={userData.imageUrl ? userData.imageUrl : "/profile/default.webp"}
          className="size-8 rounded-full object-cover"
          alt="Profile"
        />

        <div className="text-left">
          <p className="text-[14px] font-medium text-text-primary line-clamp-1">
            {userData.username}
          </p>
          <p className="text-xs text-text-secondary">
            {userData.role[0].toUpperCase() + userData.role.slice(1)}
          </p>
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
