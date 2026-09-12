import React from "react";

function InfoItemLoading({ icon, children }) {
  return (
    <div className="mt-3 text-text-secondary flex gap-7 w-fit">
      <p className="flex gap-2 items-center animate-pulse bg-white-900 rounded-md">
        {icon}
        {children}
      </p>
      <p className="animate-pulse bg-gray-900 rounded-md w-20 h-5"></p>
    </div>
  );
}

export default InfoItemLoading;
