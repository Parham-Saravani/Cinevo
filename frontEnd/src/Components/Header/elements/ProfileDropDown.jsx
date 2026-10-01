import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext, useState } from "react";
import removeCookie from "../../../Utilities/Cookie/removeCookie";
import AdminDropDownMenu from "./AdminDropDownMenu";
import UserDropDownMenu from "./UserDropDownMenu";
import DefaultProfileImage from "/profile/default.webp";

function ProfileDropDown({ username, role, imageUrl, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeMenuStatus = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={changeMenuStatus}
        className="max-w-40 cursor-pointer flex items-center gap-3 bg-input-bg border border-input-border hover:border-input-border-hover px-2.5 py-1.5 rounded-full transition-colors duration-300"
      >
        <img
          onLoad={() => setIsLoading(false)}
          onError={(event) => (event.target.src = DefaultProfileImage)}
          src={imageUrl || DefaultProfileImage}
          className={`size-8 rounded-full object-cover ${isLoading ? "bg-gray-700 animate-pulse" : ""}`}
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
        <UserDropDownMenu isOpen={isOpen} onLogout={logOut} />
      )}
    </div>
  );
}

export default ProfileDropDown;
