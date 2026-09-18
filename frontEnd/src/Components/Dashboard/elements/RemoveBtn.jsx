import Modal from "../../Modal/Modal";
import { FaTrash } from "react-icons/fa";

function RemoveBtn({ data, onRemove }) {
  const RemoveBtn = () => {
    return (
      <button className="cursor-pointer hover:bg-red-800/50 flex h-11 w-11 max-2xl:w-9 max-2xl:h-9 max-xl:w-8 max-xl:h-8 max-xl:text-sm items-center justify-center rounded-full bg-red-800 text-white transition-colors duration-300">
        <FaTrash />
      </button>
    );
  };
  return (
    <Modal
      onSubmit={() => onRemove(data._id)}
      Trigger={RemoveBtn}
      title={"Delete Content"}
    >
      <div className="mt-4 text-center">
        <p className="text-sm text-text-secondary">
          You are about to permanently delete:
        </p>

        <div className="mt-3 rounded-xl border border-red-500/20 bg-red-500/10 p-3">
          <p className="truncate font-medium text-red-500">{data.title}</p>
        </div>

        <p className="mt-3 text-xs text-text-secondary">
          This action cannot be undone.
        </p>
      </div>
    </Modal>
  );
}

export default RemoveBtn;
