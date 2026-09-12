import { useNavigate } from "react-router";

function NotFound({ children }) {
  const navigate = useNavigate();
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
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <button
        onClick={() => {
          navigate(-1, { replace: true });
        }}
        className="font-semibold mt-5 w-50 h-13 rounded-xl bg-cta-primary hover:bg-cta-primary/50 text-text-primary transition-colors duration-300 cursor-pointer reload-btn"
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
