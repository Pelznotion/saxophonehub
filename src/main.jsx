import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 👇 Use basename to tell React Router your repo name */}
    <BrowserRouter basename="/saxophonehub">
      <App />
    </BrowserRouter>
  </StrictMode>
);
