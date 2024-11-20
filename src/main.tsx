import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FormBuilderPage } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormBuilderPage />
  </StrictMode>,
);
