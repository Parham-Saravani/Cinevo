import { FaEdit, FaMehRollingEyes, FaTrash } from "react-icons/fa";

function AdminUsers({ _id, username, email, role, createdAt }) {
  return (
    <tr className="even:bg-input-bg/50 odd:bg-input-bg/80">
      <td className="py-3 px-3 truncate max-w-45 max-xl:hidden">{_id}</td>
      <td className="py-3 px-3">{username}</td>
      <td className="py-3 px-3 truncate max-w-40">{email}</td>
      <td className="py-3 px-3 text-center">
        <span className={`${role === 'admin' ? 'bg-cta-primary/10 text-cta-primary' : 'bg-blue-500/10 text-blue-500'} rounded-xl py-1 px-2 `}>
          {role}
        </span>
      </td>
      <td className="py-3 px-3 max-lg:hidden">{formatTime(createdAt)}</td>
      <td className="text-center">
        <button className="bg-yellow-500/10 rounded-xl text-yellow-500 px-2 py-2 cursor-pointer transform-colors duration-300 hover:bg-yellow-500/20">
          <FaEdit />
        </button>
        <button className="bg-red-500/10 rounded-xl text-red-500 px-2 py-2 ml-2 cursor-pointer transform-colors duration-300 hover:bg-red-500/20">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString("en");
};
export default AdminUsers;
