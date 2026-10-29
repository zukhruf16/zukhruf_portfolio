import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";

const Toaster = lazy(() =>
  import("sonner").then((m) => ({ default: m.Toaster }))
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Suspense fallback={null}>
      <Toaster theme="dark" position="bottom-right" richColors />
    </Suspense>
  </StrictMode>
);
