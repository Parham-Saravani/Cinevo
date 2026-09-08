import React from "react";

function Content({ value, children }) {
  return (
    <>
      <h2 className="flex gap-2 items-center text-text-primary font-semibold text-2xl">
        Scrreenshots
      </h2>
      {children}
    </>
  );
}

export default Content;
