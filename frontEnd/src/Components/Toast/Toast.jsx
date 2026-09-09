import { IoIosAlert } from "react-icons/io";
import toast from "react-hot-toast";

function Toast({ children, isError = true }) {
  return toast.custom(
    <div
      className={`bg-input-bg px-3 py-3 border border-white/10 rounded-xl ${isError ? "text-red-500" : "text-green-500"}`}
    >
      <div className="flex items-center">
        <span className="flex justify-center items-center bg-input-border/50 w-8 h-8 rounded-md">
          <IoIosAlert className="size-5.5 fill-current" />
        </span>
        <p className="ml-3 text-[13px] toast-message">{children}</p>
      </div>
    </div>,
  );
}

export default Toast;
