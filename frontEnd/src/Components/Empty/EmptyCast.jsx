import { RiUserStarLine } from "react-icons/ri";

function EmptyCast() {
  return (
    <div className="mt-2 py-3 px-4 text-center text-text-primary">
      <div className="mx-auto mb-2.5 size-14 rounded-full bg-white/5 flex items-center justify-center">
        <RiUserStarLine className="text-2xl opacity-60" />
      </div>

      <h1 className="font-bold text-lg">No cast information</h1>

      <p className="mt-1 text-sm max-sm:text-xs text-text-secondary">
        Cast details are not available for this title.
      </p>
    </div>
  );
}

export default EmptyCast;
