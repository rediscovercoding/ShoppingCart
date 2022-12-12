import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import AboutUs from "./AboutUs";
import Cart from "./Cart.js";

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
};

export default RouteSwitch;
