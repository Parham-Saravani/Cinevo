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
      <p className="mt-3  text-gray-400 text-center leading-8">
        Are you sure you want to delete
        <kbd className=" ml-2 font-semibold text-red-600 bg-red-600/10 rounded-md px-2 py-1">
          {data.title}
        </kbd>
        This action cannot be undone.
      </p>
    </Modal>
  );
}

export default RemoveBtn;
