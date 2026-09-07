import { useEffect } from "react";

function Error() {

  useEffect(()=> {
    console.log('s');
    
  }, [])
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
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
        <p className="mt-2 text-xl">We couldn't find anything.</p>
      </div>
      <button className="mt-4 w-40 py-3 rounded-xl bg-cta-primary hover:bg-cta-hover text-text-primary text-sm transition-colors duration-300 cursor-pointer reload-btn">
        Back to Home
      </button>
    </div>
  );
}

export default Error;