import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import { MdLockOutline } from "react-icons/md";

function PasswordInput({ children, passwordValue, passwordSetState }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
      <MdLockOutline className="absolute left-2 size-5 top-0 bottom-0 my-auto fill-current" />
      <input
        onInput={(event) => passwordSetState(event.target.value)}
        value={passwordValue}
        className="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input login-password"
        placeholder={children}
        type={showPassword ? "text" : "password"}
      />
      <button
        onClick={() => setShowPassword((prev) => !prev)}
        type="button"
        className="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password"
      >
        {showPassword ? (
          <LuEyeOff className="size-5 stroke-current" />
        ) : (
          <LuEye className="size-5 stroke-current" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
