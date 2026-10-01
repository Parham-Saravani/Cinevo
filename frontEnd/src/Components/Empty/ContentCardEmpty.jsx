import { MdBrokenImage } from "react-icons/md";
function ContentCardEmpty() {
  return (
    <div className="flex h-75 w-full flex-col items-center justify-center gap-2 bg-gray-900 px-4 text-center">
      <MdBrokenImage className="size-10 text-gray-500" />
      <p className="text-sm font-medium text-text-primary">
        Image not available
      </p>

      <p className="text-xs text-text-secondary">Failed to load poster</p>
    </div>
  );
}

export default ContentCardEmpty;
