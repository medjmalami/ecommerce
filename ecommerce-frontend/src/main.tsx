import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />

    <App>
      {/* your content here */}
      <h1>Welcome to my app!</h1>
    </App>
  </StrictMode>
);
