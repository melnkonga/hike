import React from "react";

import WelcomeViewComponent from "../components/WelcomeAuthentication/WelcomeViewComponent";
import AuthenticationViewComponent from "../components/WelcomeAuthentication/AuthenticationViewComponent";

import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome_page">
      <WelcomeViewComponent />
      <AuthenticationViewComponent />
    </div>
  );
};

export default WelcomePage;
