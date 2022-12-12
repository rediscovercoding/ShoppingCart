import { createRoot } from "react-dom/client";
import RouteSwitch from "./RouteSwitch.js";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import React from "react";
import Home from "./Home.js";

import Cart from "./Cart.js";
import NavBar from "./NavBar.js";

const root = createRoot(document.querySelector("#root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <RouteSwitch />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
