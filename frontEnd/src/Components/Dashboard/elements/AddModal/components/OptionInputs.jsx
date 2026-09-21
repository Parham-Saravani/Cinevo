import { useId } from "react";
import { FaCheck } from "react-icons/fa";

function OptionInputs({ setter, value, uniqueKey, children }) {
  const id = useId();
  return (
    <div className="flex items-center text-text-secondary text-xs">
      <label
        htmlFor={id + uniqueKey}
        className="h-4 w-4 bg-input-border/50 rounded-md text-transparent flex cursor-pointer justify-center items-center gap-3 text-sm transition-colors featured-checkbox mr-1.5"
      >
        <input
          checked={value}
          onChange={(event) =>
            setter((prev) => ({ ...prev, [uniqueKey]: event.target.checked }))
          }
          id={id + uniqueKey}
          hidden
          type="checkbox"
          className="h-4 w-4 accent-primary"
        />
        <FaCheck className="size-3 fill-current" />
      </label>
      {children}
    </div>
  );
}

export default OptionInputs;
