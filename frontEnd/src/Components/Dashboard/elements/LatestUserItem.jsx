import defaultProfilImage from "../../../../public/profile/default.webp";

function LatestUser({ imageUrl, username, email, role }) {
  return (
    <div className="flex items-center gap-3">
      <img
        onLoad={() => setLoading(false)}
        src={imageUrl !== null ? imageUrl : defaultProfilImage}
        alt={username}
        className="size-9 max-sm:size-7 rounded-full object-cover"
      />

      <div className="flex-1">
        <h3 className="max-sm:text-xs font-medium text-text-primary">
          {username}
        </h3>

        <p className="text-sm max-sm:text-xs text-text-secondary truncate max-sm:max-w-40 max-w-50">
          {email}
        </p>
      </div>

      <span
        className={`max-w-14 truncate text-xs px-2 py-1 rounded-full ${role === "admin" ? "bg-cta-primary/10 text-cta-primary" : "bg-blue-500/10 text-blue-500"}`}
      >
        {role}
      </span>
    </div>
  );
}

export default LatestUser;
