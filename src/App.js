import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import {
  Navbar,
  Homepage,
  Exchange,
  Cryptocurrencies,
  Cryptodetails,
  Cryptonews,
} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/exchanges" element={<Exchange />} />

          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

          <Route path="/crypto/:coinId" element={<Cryptodetails />} />

          <Route path="/news" element={<Cryptonews />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default App;
