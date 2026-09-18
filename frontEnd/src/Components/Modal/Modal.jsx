import { useState } from "react";
import { FaSleigh } from "react-icons/fa";

function Modal({ children, Trigger, title, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <>
        <div onClick={() => setIsOpen(true)}>
          <Trigger />
        </div>

        <div
          className={`${
            isOpen ? "fixed" : "hidden"
          }  inset-0 z-100 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md transition-all duration-300`}
        >
          <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-input-border bg-bg-primary shadow-2xl">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-input-border px-6 py-5">
              <h2 className="text-lg font-semibold text-text-primary">
                {title}
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-text-secondary transition-colors duration-300 hover:bg-input-border/30 hover:text-text-primary"
              >
                ✕
              </button>
            </header>

            {/* Body */}
            <main className="hide-scroll flex-1 overflow-y-auto px-6 py-5">
              {children}
            </main>

            {/* Footer */}
            <footer className="flex items-center justify-end gap-2 border-t border-input-border px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="cursor-pointer rounded-xl border border-input-border px-5 py-2.5 text-text-primary transition-colors duration-300 hover:bg-input-border/20"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onSubmit();
                }}
                type="button"
                className="cursor-pointer rounded-xl bg-cta-primary px-5 py-2.5 font-medium text-white transition-opacity duration-300 hover:opacity-80"
              >
                Submit
              </button>
            </footer>
          </div>
        </div>
      </>
    </>
  );
}

export default Modal;
