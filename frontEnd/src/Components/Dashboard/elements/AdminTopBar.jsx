import DefaultUserProfileImage from "/profile/default.webp";

function AdminTopBar({ username, role, imageUrl }) {
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
            src={imageUrl && imageUrl ? imageUrl : DefaultUserProfileImage}
            alt=""
            className="size-9 rounded-full"
          />

          <div>
            <h3 className="text-sm font-medium text-white">
              {username && username}
            </h3>
            <p className="text-xs text-text-secondary">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopBar;
