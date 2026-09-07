import { useEffect } from "react";
import Login from "./elements/login";

function Auth() {
  useEffect(() => {
    document.title = 'Login | Register'
  });
  return (
    <main className="fixed inset-0 max-sm:px-5 w-full h-full flex items-center justify-center auth-overlay">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full"
          src="/src/assets/Images/auth-background.png"
          alt=""
        />
        <div className="w-full h-full absolute z-10 top-0 auth-overlay"></div>
        <section className="z-20 absolute top-0 bottom-0 h-fit  m-auto left-0 right-0 px-5 py-5 w-110 bg-input-bg/60 backdrop-blur-xl rounded-xl border border-white/10 auth-form">
          {/* <!-- Navigations --> */}
          <header className="max-sm:text-xs flex items-center gap-2 w-70 mx-auto text-text-secondary">
            <button
              className="w-[50%] py-3 font-semibold border-b-2 border-transparent hover:border-cta-primary hover:text-cta-hover cursor-pointer transition-colors duration-300 auth-header-item auth-header-active"
              data-status="login"
            >
              Login
            </button>
            <button
              className="w-[50%] py-3 font-semibold border-b-2 border-transparent hover:border-cta-primary hover:text-cta-hover cursor-pointer transition-colors duration-300 auth-header-item"
              data-status="signup"
            >
              Sign Up
            </button>
          </header>

          <main className="mt-10 text-text-primary auth-content">
            <Login />
          </main>
        </section>
      </div>
    </main>
  );
}

export default Auth;
