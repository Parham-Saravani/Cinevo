import { IoIosAlert } from "react-icons/io";
import toast from "react-hot-toast";

function showToast({ children, isError = true }) {
  return toast(
    <div className={`${isError ? "text-red-500" : "text-green-500"}`}>
      <div className="flex items-center">
        <span className="flex justify-center items-center bg-input-border/50 w-8 h-8 rounded-md">
          <IoIosAlert className="size-5.5 fill-current" />
        </span>
        <p className="ml-3 text-[13px] toast-message">{children}</p>
      </div>
    </div>,
  );
}

export default showToast;
