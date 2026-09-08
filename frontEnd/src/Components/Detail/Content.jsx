import React from "react";

function Content({ value, children, nested = false, child }) {
  return (
    <>
      {!nested ? (
        <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
          {value}
        </h2>
      ) : (
        <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
          {value}
          <span className="text-text-secondary text-lg">{child}</span>
        </h2>
      )}
      {children}
    </>
  );
}

export default Content;
