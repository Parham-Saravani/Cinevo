import { useEffect, useState } from "react";
import Login from "./elements/login";
import Signup from "./elements/Signup";
import Button from "./elements/Button";

function Auth() {
  const [status, setStatus] = useState("login");
  useEffect(() => {
    document.title = "Login | `Register`";
  });
  const changeStatus = (value) => {
    setStatus(value);
  };
  return (
    <main className="fixed inset-0 max-sm:px-5 w-full h-full flex items-center justify-center auth-overlay">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full"
          src="/src/assets/Images/auth-background.png"
          alt=""
        />
        <div className="w-full h-full absolute z-10 top-0 auth-overlay"></div>
        <section className="z-20 absolute top-0 bottom-0 h-fit  m-auto left-0 right-0 px-5 pt-5 pb-10 w-110 bg-input-bg/60 backdrop-blur-xl rounded-xl border border-white/10 auth-form">
          {/* <!-- Navigations --> */}
          <header className="max-sm:text-xs flex items-center gap-2 w-70 mx-auto text-text-secondary">
            <Button onSmash={changeStatus} value="login">
              Login
            </Button>
            <Button onSmash={changeStatus} value="signup">
              Sign Up
            </Button>
          </header>

          <main className="mt-10 text-text-primary auth-content">
            {status === "login" ? <Login /> : <Signup />}
          </main>
        </section>
      </div>
    </main>
  );
}

export default Auth;
