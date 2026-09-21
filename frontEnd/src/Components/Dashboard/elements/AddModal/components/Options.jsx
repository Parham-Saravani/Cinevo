import React from "react";
import OptionInputs from "./OptionInputs";

function Options({ data: { setter, trend, featured } }) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">Options</h3>

      <div className="flex gap-6">
        <OptionInputs uniqueKey={"isFeatured"} setter={setter} value={featured}>
          Featured
        </OptionInputs>
        <OptionInputs uniqueKey={"isTrend"} setter={setter} value={trend}>
          Trending
        </OptionInputs>
      </div>
    </section>
  );
}

export default Options;
