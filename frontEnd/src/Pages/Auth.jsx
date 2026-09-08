import { useEffect, useState } from "react";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import Button from "../Components/Auth/Button";

function Auth() {
  const [status, setStatus] = useState("login");
  const [active, setActive] = useState("Login");
  useEffect(() => {
    document.title = 'Login | Cinevo';
  }, [])
  useEffect(() => {
    document.title = status === "login" ? "Login | Cinevo " : "Register | Cinevo";
  }, [status]);
  const changeStatus = (value, activeItem) => {
    setStatus(value);
    setActive(activeItem);
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
            <Button active={active} onSmash={changeStatus} value="login">
              Login
            </Button>
            <Button active={active} onSmash={changeStatus} value="signup">
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
