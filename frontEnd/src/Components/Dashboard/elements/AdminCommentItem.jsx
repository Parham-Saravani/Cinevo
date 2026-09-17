
function AdminCommentItem({ author, text, isSpoil, title, createdAt }) {
  return (
    <tr className="even:bg-input-bg/50 odd:bg-input-bg/80">
      <td className="px-3 py-3">{author}</td>

      <td className="px-3 py-3 max-w-[300px] truncate">{text}</td>

      <td className="px-3 py-3 max-lg:hidden">{title}</td>

      <td className="px-3 py-3 text-center">
        <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs">
          {isSpoil ? 'Yes' : "No"}
        </span>
      </td>

      <td className="px-3 py-3 max-lg:hidden">{formatTime(createdAt)}</td>

      <td className="px-3 py-3">
        <div className="flex justify-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs">
            View
          </button>

          <button className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 text-xs">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString("en");
};

export default AdminCommentItem;
