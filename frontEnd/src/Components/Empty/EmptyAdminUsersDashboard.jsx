import { FaUsers } from "react-icons/fa6";

function EmptyAdminUsersDashboard() {
  return (
    <div className="absolute right-0 left-0 animate-fadeIn flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="w-20 h-20 rounded-full bg-input-border/30 flex items-center justify-center mb-6">
        <FaUsers className="text-3xl text-text-secondary" />
      </div>

      <h2 className="text-2xl font-bold text-text-primary mb-3">
        No users found
      </h2>

      <p className="max-w-md text-text-secondary leading-7 mb-8">
        There are not users currently!
      </p>
    </div>
  );
}

export default EmptyAdminUsersDashboard;
