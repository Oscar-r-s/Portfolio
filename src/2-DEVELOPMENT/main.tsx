//COMPONENTS
import React from "react";
import ReactDOM from "react-dom/client";
import Dev from "./Dev.tsx";
//STYLES
import "../index.css";
import "../Stylesheets/subtitle.css";

ReactDOM.createRoot(document.getElementById("development")!).render(
  <React.StrictMode>
    <Dev />
  </React.StrictMode>
);
