import FormatTimeAgo from "../../Utilities/FormatTimeAgo/FormatTimeAgo";
import { FaRegUser } from "react-icons/fa6";


function Comment({ author, text, isSpoil, createdAt }) {
  return (
    <div className="mt-3 flex items-center rounded-xl border-2 px-5 py-5 border-input-border">
      <span className="bg-input-border/50 px-2 py-2 rounded-md">
        <FaRegUser className="text-text-secondary size-5" />
      </span>
      <div className="ml-5 w-full">
        <div className="flex items-center justify-between">
          <h5 className="text-text-primary font-semibold">{author}</h5>
          <p className="text-text-secondary ml-6 text-xs">
            {FormatTimeAgo(createdAt)}
          </p>
        </div>
        <div className="mt-1 text-text-secondary relative">
          <p className="">{text}</p>
          {isSpoil ? (
            <div className="absolute -inset-2 flex justify-center items-center backdrop-blur-xs">
              <button className="hover:border-cta-primary/50 hover:bg-cta-primary/50 bg-input-border/50 backdrop-blur-3xl transition-colors duration-300 cursor-pointer border-2 text-sm border-input-border rounded-xl px-3 py-1 text-text-primary remove-comment-spoiler-cover-btn">
                Read
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
