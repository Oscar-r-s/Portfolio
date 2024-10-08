//COMPONENTS
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//STYLES
import "../index.css";
import "../Stylesheets/Particles/particles.css";
import "../Stylesheets/nav.css";
import "../Stylesheets/title.css";
import "../Stylesheets/subtitle.css";
import "../Stylesheets/scroll_Indicator.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
