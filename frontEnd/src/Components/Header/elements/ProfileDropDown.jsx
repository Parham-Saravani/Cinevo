import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import removeCookie from "../../../Utilities/Cookie/removeCookie";
import AdminDropDownMenu from "./AdminDropDownMenu";
import UserDropDownMenu from "./UserDropDownMenu";

function ProfileDropDown({ username, role, imageUrl, logOut, loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const changeMenuStatus = () => {
    setIsOpen(!isOpen);
  };
  if (loading) {
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
          src={imageUrl ? imageUrl : "/profile/default.webp"}
          className="size-8 rounded-full object-cover"
          alt="Profile"
        />

        <div className="text-left">
          <p className="text-[14px] font-medium text-text-primary line-clamp-1">
            {username}
          </p>
          <p className="text-xs text-text-secondary">
            {role[0].toUpperCase() + role.slice(1)}
          </p>
        </div>
        <MdKeyboardArrowDown className="text-text-secondary size-5" />
      </button>

      {role === "admin" ? (
        <AdminDropDownMenu isOpen={isOpen} onLogout={logOut} />
      ) : (
        <UserDropDownMenu isOpen={isOpen}  onLogout={logOut}/>
      )}
    </div>
  );
}

export default ProfileDropDown;
