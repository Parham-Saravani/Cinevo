import React from "react";

function Button({ children, value, onSmash }) {
  return (
    <button
      onClick={() => onSmash(value)}
      className="w-[50%] py-3 font-semibold border-b-2 border-transparent hover:border-cta-primary hover:text-cta-hover cursor-pointer transition-colors duration-300 auth-header-item "
    >
      {children}
    </button>
  );
}

export default Button;
