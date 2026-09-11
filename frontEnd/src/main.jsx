import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster
      toastOptions={{
        position: "top-left",
        duration: 3000,
        className:
          "max-w-fit! bg-input-bg! px-3! py-3! border! border-white/10! rounded-xl!",
      }}
    />
  </>,
);
