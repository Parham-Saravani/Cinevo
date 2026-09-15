import { FaEdit, FaTrash } from "react-icons/fa";

function ContentCard({ poster, title, releaseYear, _id, onEdit, onDelete }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-input-border bg-card">
      <img src={poster} alt={title} className="w-full object-cover" />

      <p className="text-center py-2.5 px-5 truncate text-xs font-medium text-text-primary">
        {title}
      </p>

      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={() => onEdit(content)}
          className="cursor-pointer hover:bg-blue-600/70 flex h-11 w-11 max-2xl:w-9 max-2xl:h-9 max-xl:w-8 max-xl:h-8 max-xl:text-sm items-center justify-center rounded-full bg-blue-800 text-white transition-colors duration-300"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="cursor-pointer hover:bg-red-800/50 flex h-11 w-11 max-2xl:w-9 max-2xl:h-9 max-xl:w-8 max-xl:h-8 max-xl:text-sm items-center justify-center rounded-full bg-red-800 text-white transition-colors duration-300"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ContentCard;
