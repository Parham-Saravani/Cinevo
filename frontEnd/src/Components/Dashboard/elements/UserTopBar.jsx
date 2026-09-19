import { useState } from "react";
import DefaultUserProfileImage from "/profile/default.webp";
import { FaLeaf } from "react-icons/fa";

function UserTopBar({ username, role, imageUrl, loading }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <header className="max-sm:hidden max-md:ml-0 max-md:mr-0 sticky top-0 z-40 flex h-15 items-center justify-between border-b border-input-border bg-input-bg px-6">
      <div className="flex items-center justify-between  ml-60 w-full">
        <div>
          <h1 className="text-lg font-semibold text-white">Welcome Back 👋</h1>
          <p className="text-xs text-text-secondary">
            Continue watching your favorite content
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
            onLoad={() => setIsLoading(false)}
            onError={(event) => (event.target.src = DefaultUserProfileImage)}
            src={imageUrl || DefaultUserProfileImage}
            alt=""
            className={`size-9 rounded-full ${isLoading ? "bg-gray-700 animate-pulse" : ""}`}
          />

          <div>
            <h3
              className={`text-sm font-medium text-white ${loading ? "w-15 h-4 rounded-md bg-gray-700 animate-pulse" : ""}`}
            >
              {username && username}
            </h3>
            <p
              className={`text-xs text-text-secondary ${loading ? "w-20 h-4 rounded-md bg-gray-700 animate-pulse" : ""}`}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserTopBar;
