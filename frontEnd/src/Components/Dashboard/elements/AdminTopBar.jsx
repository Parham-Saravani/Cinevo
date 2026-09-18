import { useState } from "react";
import DefaultUserProfileImage from "/profile/default.webp";

function AdminTopBar({ username, role, imageUrl, loading }) {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <header className="sticky top-0 z-40 flex py-2 border-b border-input-border bg-input-bg px-6">
      <div className="flex items-center justify-between max-md:ml-0 max-md:mr-0 ml-60 w-full">
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-72 rounded-xl placeholder:text-text-secondary/50 text-text-primary focus:border-input-border-focus transition-colors duration-300 border border-input-border bg-primary px-4 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            onLoad={() => setImageLoading(false)}
            onError={(event) => {
              event.target.src = DefaultUserProfileImage;
            }}
            src={imageUrl && imageUrl ? imageUrl : DefaultUserProfileImage}
            alt="profile-Image"
            className={`${imageLoading ? "bg-gray-700 animate-pulse" : ""} object-cover size-9 rounded-full`}
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

export default AdminTopBar;
