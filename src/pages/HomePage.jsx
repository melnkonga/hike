import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import ExploreHomePage from "./ExploreHomePage";
import "./HomePage.css";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="user_main_page">
      <TopNavbar />
      <div className="user_main_page__content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ExploreHomePage />} />
        </Routes>
      </div>
      <div className="user_main_page__footer">
        <p>© 2023 Hike</p>
      </div>
    </div>
  );
};

export default HomePage;
