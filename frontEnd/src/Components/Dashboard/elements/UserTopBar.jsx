import DefaultUserProfileImage from "/profile/default.webp";

function UserTopBar({ username, role, imageUrl }) {
  return (
    <header className="max-md:ml-0 max-md:mr-0 sticky top-0 z-40 flex h-15 items-center justify-between border-b border-input-border bg-input-bg px-6">
      <div className="flex items-center justify-between  ml-60 w-full">
        <div>
          <h1 className="text-lg font-semibold text-white">Welcome Back 👋</h1>
          <p className="text-xs text-text-secondary">
            Continue watching your favorite content
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={imageUrl && imageUrl ? imageUrl : DefaultUserProfileImage}
            alt=""
            className="size-9 rounded-full"
          />

          <div>
            <h3 className="text-sm font-medium text-white">
              {username && username}
            </h3>
            <p className="text-xs text-text-secondary">
              {role && role[0].toUpperCase() + role.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserTopBar;
