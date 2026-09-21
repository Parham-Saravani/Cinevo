import { useId, useState } from "react";

function UploadInputs({ fileTypes, placeHolder, setter, value }) {
  const [title, setTitle] = useState("");
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <input
        value={title}
        className="text-text-primary focus:border-input-border-focus transition-colors duration-300 py-3 px-4 w-full bg-input-bg border border-input-border rounded-xl outline-hidden placeholder:text-text-secondary/50"
        placeholder={placeHolder}
        readOnly
      ></input>
      <label
        htmlFor={id + placeHolder}
        className="py-2 px-2 bg-cta-primary rounded-xl hover:bg-cta-primary/70 transition-colors duration-300 cursor-pointer block text-sm font-medium text-text-primary"
      >
        Upload
        <input
          accept={`${fileTypes}/*`}
          onChange={(event) => {
            setTitle(event.target.files[0].name);
            setter((prev) => ({ ...prev, [value]: event.target.files[0] }));
          }}
          id={id + placeHolder}
          hidden
          type="file"
        />
      </label>
    </div>
  );
}

export default UploadInputs;
