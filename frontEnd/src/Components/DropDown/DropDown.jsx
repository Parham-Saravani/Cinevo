import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function DropDown({ title, children, modal = false }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`col-span-1 relative ${modal ? 'h-11 text-sm  ' : ''}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-text-secondary/50 flex items-center justify-between px-2.5 py-3 bg-input-bg/50 border-2 border-input-border/50 w-full h-full rounded-xl cursor-pointer"
      >
        <span>{title}</span>
        <IoIosArrowDown className="size-4.5 fill-current" />
      </button>
      <ul
        className={`${isOpen ? "block" : "hidden"} absolute mt-1 w-full max-h-80 overflow-auto z-50 bg-input-bg  rounded-xl border border-input-border custom-scroll flex-col gap-1 px-2 py-2 sort-menu series-genres-container`}
      >
        {children}
      </ul>
    </div>
  );
}

export default DropDown;
