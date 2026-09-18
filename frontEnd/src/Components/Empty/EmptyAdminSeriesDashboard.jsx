import { FaUsers } from "react-icons/fa";

function EmptyAdminSeriesDashboard() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="w-20 h-20 rounded-full bg-input-border/30 flex items-center justify-center mb-6">
        <FaUsers className="text-3xl text-text-secondary" />
      </div>

      <h2 className="text-2xl font-bold text-text-primary mb-3">
        No serie found
      </h2>

      <p className="max-w-md text-text-secondary leading-7 mb-8">
        There are no series available at the moment.
      </p>
    </div>
  );
}

export default EmptyAdminSeriesDashboard;
