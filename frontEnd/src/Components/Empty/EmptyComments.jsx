import { FaRegComments } from "react-icons/fa";

function EmptyComments() {
  return (
    <div className="mt-5 py-3 px-4 text-center rounded-xl text-text-primary comment-empty-state">
      <div className="mx-auto mb-2.5 size-14 rounded-full bg-white/5 flex items-center justify-center">
        <FaRegComments className="text-2xl opacity-60" />
      </div>

      <h1 className="font-bold text-lg">No reviews yet</h1>

      <p className="mt-1 text-sm max-sm:text-xs text-text-secondary">
        No one has shared their thoughts yet.
        <br className="max-sm:hidden" />
        Be the first to leave a review.
      </p>
    </div>
  );
}

export default EmptyComments;
