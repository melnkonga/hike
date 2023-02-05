import React from "react";

import GetUserCookie from "../hooks/GetUserCookie";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";

const MainPage = () => {
  const userId = GetUserCookie("user");

  return <div>{userId ? <HomePage /> : <WelcomePage />}</div>;
};

export default MainPage;
