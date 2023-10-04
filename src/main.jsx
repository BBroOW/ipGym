import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./css/index.css";
import heropage from "./assets/heropage.avif";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./Pages/booking.jsx";
import Layout from "./Layout/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/Booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
