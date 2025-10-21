import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "./components/index.css";

let startTime = null;

window.addEventListener("load", () => {
  startTime = Date.now();

  const root = ReactDOM.createRoot(document.getElementById("root"));

  
  function renderApp() {
    const elapsedMs = Date.now() - startTime;
    const seconds = Math.floor(elapsedMs / 1000);

    
    root.render(
      <React.StrictMode>
        <Home seconds={seconds} />
      </React.StrictMode>
    );
  }

  renderApp(); 
  setInterval(renderApp, 1000); 
});
