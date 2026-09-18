import { useState } from "react";

function Modal({ children, Trigger, title, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)}>{<Trigger />}</div>
      <div
        className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} max-sm:px-5 fixed transition-all flex justify-center items-center  w-dvw h-dvh right-0 top-0 z-100 bg-black/10 duration-300 backdrop-blur-md`}
      >
        <div className="max-h-[90vh] overflow-y-auto w-150 rounded-2xl border border-input-border bg-bg-primary p-6 shadow-2xl hide-scroll">
          <header className="flex items-center justify-between mb-6 text-white">
            <h2 className="text-text-primary font-bold text-xl">{title}</h2>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-input-border/30 hover:text-text-primary"
            >
              ✕
            </button>
          </header>
          <main>{children}</main>

          <footer className="flex items-end justify-end mt-6 text-sm text-[#666D80] select-none gap-2">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="cursor-pointer rounded-xl border border-white/10 px-5 py-2.5 text-white transition hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onSubmit();
              }}
              type="submit"
              className="cursor-pointer rounded-xl bg-cta-primary px-5 py-2.5 font-medium text-white transition hover:opacity-80"
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Modal;
