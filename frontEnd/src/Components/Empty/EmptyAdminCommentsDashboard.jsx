import { FaComments } from "react-icons/fa6";

function EmptyAdminCommentsDashboard() {
  return (
    <div className="absolute right-0 left-0 animate-fadeIn flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-input-border/30">
        <FaComments className="text-3xl text-text-secondary" />
      </div>

      <h2 className="mb-3 text-2xl font-bold text-text-primary">
        No comments found
      </h2>

      <p className="mb-8 max-w-md leading-7 text-text-secondary">
        There are no comments available at the moment.
      </p>
    </div>
  );
}

export default EmptyAdminCommentsDashboard;
