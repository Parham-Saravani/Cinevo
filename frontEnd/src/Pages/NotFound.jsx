import { useEffect } from "react";

function NotFound({ children, error }) {
  return (
    <div className="animate-fadeIn fixed inset-0 flex flex-col justify-center items-center">
      <div className="eyes-container" id="eyesContainer">
        <div className="eye">
          <div className="pupil"></div>
        </div>
        <div className="eye">
          <div className="pupil"></div>
        </div>
      </div>
      <div className="mt-10 text-text-primary text-center">
        <h2 className="font-bold text-3xl">Opps...</h2>
        <p className="mt-5 leading-8 text-xl  w-100">
          {children ? children : "The page you're looking for doesn't exist or has been moved."}
        </p>
      </div>
      <button className="font-semibold mt-5 w-40 py-3 rounded-xl bg-cta-primary hover:bg-cta-hover text-text-primary transition-colors duration-300 cursor-pointer reload-btn">
        {error ? "Back to Home" : "Refresh"}
      </button>
    </div>
  );
}

export default NotFound;
