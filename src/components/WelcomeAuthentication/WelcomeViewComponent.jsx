import React from "react";
import "./WelcomeViewComponent.css";
import roadMapDraw from "../../assets/road-map-draw.png";

const WelcomeViewComponent = () => {
  return (
    <div className="welcome_view_component__container">
      <div className="welcome_view_component__title">
        <h1>Hike</h1>
      </div>
      <div className="welcome_view_component__bg__decoration"></div>
    </div>
  );
};

export default WelcomeViewComponent;
