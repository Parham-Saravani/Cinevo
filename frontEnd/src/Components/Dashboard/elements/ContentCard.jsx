import RemoveBtn from "../elements/RemoveBtn";
import EditBtn from "../elements/EditBtn";
import { useState } from "react";
import ContentCardEmpty from "../../Empty/ContentCardEmpty";

function ContentCard({ data, onRemove, endPoint }) {
  const [lodaing, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-input-border bg-card">
      {error ? (
        <ContentCardEmpty />
      ) : (
        <img
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
          src={data.poster}
          alt={data.title}
          className={`${lodaing ? "animate-pulse bg-gray-900" : ""} w-full h-75 object-cover`}
        />
      )}

      <p className="text-center py-2.5 px-5 truncate text-xs font-medium text-text-primary">
        {data.title}
      </p>

      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <EditBtn endPoint={endPoint} data={data} />
        <RemoveBtn onRemove={onRemove} data={data} />
      </div>
    </div>
  );
}

export default ContentCard;
