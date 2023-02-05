import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
