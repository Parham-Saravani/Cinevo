import { useEffect, useId } from "react";
import { useState } from "react";
import Toast from "../../../Toast/Toast";

function AddModal({
  title,
  captoin,
  setter,
  onSubmit,
  isAddModalOpen,
  setModalStatus,
  children,
}) {
  return (
    <div
      className={`${isAddModalOpen ? "animate-fadeIn fixed" : "hidden"} max-lg:px-6 z-100 fixed inset-0  flex items-center transition-all duration-300 justify-center bg-black/70 backdrop-blur-sm`}
    >
      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden flex flex-col rounded-2xl border border-input-border bg-bg-primary shadow-2xl hide-scroll">
        <header className="border-b border-input-border p-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              {title || "Add new Content"}
            </h2>

            <p className="mt-1 text-sm text-text-secondary">{captoin}</p>
          </div>

          <button
            onClick={() => setModalStatus(false)}
            type="button"
            className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-input-border/30 hover:text-text-primary"
          >
            ✕
          </button>
        </header>
        {children}
        <footer className="flex justify-end gap-3 border-t border-input-border p-6 pt-5">
          <button
            onClick={() => setModalStatus(false)}
            type="button"
            className="cursor-pointer rounded-xl border border-input-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors duration-300 hover:bg-input-border/20 hover:text-text-primary"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              const data = await onSubmit();
              if (data === "MOVIE_CREATED") setModalStatus(false);
            }}
            type="button"
            className="cursor-pointer bg-cta-primary hover:bg-cta-primary/70 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300"
          >
            Create Movie
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AddModal;
