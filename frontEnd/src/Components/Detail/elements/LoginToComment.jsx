import { FaLock, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router";

function LoginToComment() {
  return (
    <div className="bg-linear-to-br from-cta-primary/10 via-transparent to-cta-primary/10 border border-white/10 rounded-xl py-3.5">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-13 h-13 rounded-full bg-input-bg/50 border border-input-border/50 flex items-center justify-center mb-5">
          <FaRegCommentDots className="text-2xl text-cta-primary" />
        </div>

        <h3 className="text-text-primary max-sm:text-[15px] text-lg font-semibold mb-2">
          Join the Discussion
        </h3>

        <p className="text-text-secondary text-sm max-sm:text-xs max-w-md leading-7 mb-3">
          Sign in to share your thoughts, write reviews, and interact with other
          viewers.
        </p>

        <Link
          to="/auth"
          className="flex items-center gap-2 text-sm max-sm:text-xs bg-cta-primary hover:bg-cta-primary/50 text-text-primary px-3 py-3 rounded-xl transition-colors duration-300"
        >
          <FaLock />
          Login to Comment
        </Link>
      </div>
    </div>
  );
}

export default LoginToComment;
