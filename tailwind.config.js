import React from "react"; // optional if using react-jsx
import { createRoot } from "react-dom/client";
import "./index.css";       // this must be correct path
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
