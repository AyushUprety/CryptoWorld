import React from "react";
import { Routes } from "react-router-dom";
import "./app.css";
import { Navbar } from "./components/index";

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

          <Route path="/cryptocurrencies" element={<Cryptocurrency />} />

          <Route path="/cryptonews" element={<Cryptonews />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default App;
