import { useId } from "react";
import Toast from "../../../../Toast/Toast";

function ModalScreenshots({ value, setter }) {
  const id = useId();
  const isScreenshotDuplicated = (name, size) => {
    const isDuplicated = value.some(
      (item) => item.file.name === name && item.file.size === size,
    );
    return isDuplicated;
  };
  const removeScreenshot = (id) => {
    const newScreenshots = value.filter((item) => item.id !== id);

    setter((prev) => ({ ...prev, totalScreenshots: [...newScreenshots] }));
  };

  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">
        Screenshots
      </h3>

      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2 rounded-xl border border-input-border bg-input-bg px-4 py-2 text-sm text-text-primary min-h-11 h-fit w-full">
          {value.map(({ id, file: { name } }) => {
            return (
              <span
                key={id}
                className="flex items-center gap-2 rounded-lg bg-bg-primary/50 text-text-secondary px-3 py-1.5 text-sm text-primary"
              >
                {name}
                <button
                  onClick={() => removeScreenshot(id)}
                  className="hover:bg-input-border/40 rounded-full w-6 h-6 inline-flex justify-center items-center text-xs transition-colors duration-300 cursor-pointer"
                  type="button"
                >
                  ✕
                </button>
              </span>
            );
          })}
        </div>

        <label
          htmlFor={id + "screenshot"}
          className="flex items-center justify-center px-3 py-2 rounded-xl bg-primary text-sm font-medium text-white transition-colors duration-300 hover:bg-cta-primary/70 bg-cta-primary cursor-pointer"
        >
          Upload
          <input
            accept="image/*"
            onChange={(event) => {
              const isDuplicated = isScreenshotDuplicated(
                event.target.files[0].name,
                event.target.files[0].size,
              );
              if (isDuplicated) {
                Toast({ children: "You already upload this image!" });
                return;
              }
              if (value.length === 4) {
                Toast({ children: "Maximum 4 screenshots are allowed" });
                return;
              }
              setter((prev) => ({
                ...prev,
                totalScreenshots: [
                  ...value,
                  { id: crypto.randomUUID(), file: event.target.files[0] },
                ],
              }));
            }}
            hidden
            type="file"
            id={id + "screenshot"}
          />
        </label>
      </div>
    </section>
  );
}

export default ModalScreenshots;
