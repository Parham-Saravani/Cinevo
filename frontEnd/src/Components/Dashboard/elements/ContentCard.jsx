import RemoveBtn from "../elements/RemoveBtn";
import EditBtn from "../elements/EditBtn";
function ContentCard({ data, onEdit, onRemove, endPoint }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-input-border bg-card">
      <img src={data.poster} alt={data.title} className="w-full object-cover" />

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
