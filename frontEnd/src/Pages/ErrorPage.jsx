import { Link, useLocation, useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="w-full *: text-center">
        <div className="bg-linear-180 from-cta-primary/50 to-bg-primary text-transparent bg-clip-text text-[25rem]  leading-none font-black tracking-tighter text-primary/20 max-sm:text-[7rem]">
          404
        </div>

        <h1 className="text-3xl font-bold max-sm:text-2xl text-text-primary">
          Movie or Series Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-text-secondary">
          We couldn't find the movie or series you're looking for. It may have
          been removed, renamed, or the link may be incorrect.
        </p>

        <div className="mt-7 flex justify-center gap-3">
          <button className="bg-cta-primary/70 w-60 h-13 cursor-pointer transition-colors duration-300 hover:bg-cta-primary/50 text-text-primary rounded-xl" onClick={() => navigate("/", { replace: true })}>
            Go Home
          </button>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
