import { useId } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import LoginValidator from "../../Validators/LoginValidator";
import { useState } from "react";
import Toast from "../Toast/Toast";
import { baseUrl } from "../../Utilities/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    const data = LoginValidator.safeParse({ email, password });
    if (data.success) {
      try {
        const response = await fetch(`${baseUrl}/api/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
          throw Error();
        }
        const data = await response.json();
        if (data.message === "WRONG_CREDENTIALS") {
          <Toast>
            Login failed. Please check your credentials and try again.
          </Toast>;
        } else if (data.message === "LOGIN_SUCCESSFUL") {
          <Toast isError={false}>
            Login successful. Welcome back to Cinevo!
          </Toast>;
        }
      } catch (error) {
        <Toast>{error.message}</Toast>;
      }
    } else {
      <Toast>{data.error.issues[0].message}</Toast>;
    }
  };

  const id = useId();
  return (
    <>
      <h2 className="animate-fadeInUp font-bold text-2xl max-sm:text-xl">
        Welcome Back
      </h2>
      <p className="animate-fadeInUp text-text-secondary text-sm max-sm:text-xs">
        Glad to see you again! Please login to continue
      </p>

      <form className="mt-7">
        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <MdOutlineMail className="absolute size-5 left-2 bottom-0 top-0 my-auto fill-current" />
          <input
            onInput={(event) => setEmail(event.target.value)}
            value={email}
            className="max-sm:text-xs pl-9 pr-6 h-full w-full rounded-xl outline-hidden placeholder:text-text-secondary login-email"
            placeholder="Enter your email"
            type="email"
          />
        </div>

        <div className="animate-fadeInUp relative mt-2 flex items-center bg-input-bg text-text-secondary border-2 border-input-border/50 rounded-xl h-14 focus-within:border-input-border-focus transition-colors duration-300">
          <MdLockOutline className="absolute left-2 size-5 top-0 bottom-0 my-auto fill-current" />
          <input
            onInput={(event) => setPassword(event.target.value)}
            value={password}
            className="max-sm:text-xs pr-9 pt-1 pl-9 h-full rounded-xl w-full outline-hidden placeholder:text-text-secondary password-input login-password"
            placeholder="Enter your password"
            type="password"
          />
          <button
            type="button"
            className="absolute right-2 cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300 show-password"
          >
            <LuEye className="size-5 stroke-current" />
          </button>
        </div>

        <div className="animate-fadeInUp mt-3 flex items-center justify-between">
          <div className="flex items-center text-xs max-sm:text-[10px]">
            <label
              className="flex items-center justify-center mr-1.5 w-4 h-4 text-transparent rounded-sm bg-input-border/50 cursor-pointer remember-checkbox transition-colors duration-300"
              htmlFor="remember-checkbox"
            >
              <input
                id="remember-checkbox"
                className="mr-2"
                type="checkbox"
                hidden
              />
              <FaCheck className="size-3 fill-current" />
            </label>
            Remember me
          </div>
          <span className="text-xs max-sm:text-[10px] text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button
          onClick={loginHandler}
          className="animate-fadeInUp font-bold max-sm:text-xs text-sm mt-4 text-center w-full h-12 rounded-xl bg-cta-primary hover:bg-cta-hover transform-colors duration-300 cursor-pointer disabled:bg-cta-primary/40 disabled:cursor-default login-btn"
          type="button"
        >
          Login
        </button>
      </form>

      <p className="animate-fadeInUp text-xs max-sm:text-[10px] mt-10 text-center">
        Don't have an account?
        <span className="ml-1.5 text-cta-primary hover:text-cta-hover transition-colors duration-300 cursor-pointer signup-footer-btn">
          Sign Up
        </span>
      </p>
    </>
  );
}

export default Login;
