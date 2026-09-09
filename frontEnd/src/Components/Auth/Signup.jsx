import { LuEye } from "react-icons/lu";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <h2 className="animate-fadeInUp font-bold text-2xl max-sm:text-xl">
        Create Your Account
      </h2>
      <p className="animate-fadeInUp text-text-secondary text-sm max-sm:text-xs">
        Join Cinevo and start exploring
      </p>

      <form className="mt-6">
        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <FaRegUser className="absolute size-5 left-2 bottom-0 top-0 my-auto fill-current" />
          <input
            onInput={(event) => setUsername(event.target.value)}
            value={username}
            className="max-sm:text-xs px-6 h-full w-full ml-3 outline-hidden placeholder:text-text-secondary signup-username"
            placeholder="Enter your Username"
            type="text"
          />
        </div>
        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <MdOutlineMail className="absolute size-5 left-2 bottom-0 top-0 my-auto fill-current" />

          <input
            onInput={(event) => setEmail(event.target.value)}
            value={email}
            className="max-sm:text-xs pl-9 pr-6 h-full w-full rounded-xl outline-hidden placeholder:text-text-secondary signup-email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <MdLockOutline className="absolute left-2 size-5 top-0 bottom-0 my-auto fill-current" />

          <input
            onInput={(event) => setPassword(event.target.value)}
            value={password}
            className="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input signup-password"
            placeholder="Create a password"
            type="password"
          />
          <button
            type="button"
            className="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password"
          >
            <LuEye className="size-5 stroke-current" />
          </button>
        </div>

        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <MdLockOutline className="absolute left-2 size-5 top-0 bottom-0 my-auto fill-current" />

          <input
            onInput={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            className="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input signup-configm-password"
            placeholder="Confirm your password"
            type="password"
          />
          <button
            type="button"
            className="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password"
          >
            <LuEye className="size-5 stroke-current" />
          </button>
        </div>
        <p className="max-sm:text-[10px] ml-1 mt-1 text-red-600 text-xs hidden confirm-password-alert">
          Password does't match!
        </p>

        <button
          className="animate-fadeInUp max-sm:text-xs mt-5 font-bold text-sm text-center w-full h-12 rounded-xl bg-cta-primary hover:bg-cta-hover transform-colors duration-300 cursor-pointer signup-btn disabled:bg-cta-primary/40 disabled:cursor-default"
          type="button"
        >
          Sign Up
        </button>
      </form>

      <p className="animate-fadeInUp max-sm:text-[10px] text-xs mt-10 text-center">
        Already have an account?
        <span className="ml-1.5 text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer login-footer-btn">
          Login
        </span>
      </p>
    </>
  );
}

export default Signup;
