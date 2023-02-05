import React from "react";
import { authenticationContext } from "../../context/AuthenticationContext";

import "./TopNavbar.css";

const TopNavbar = () => {
  const { logout } = React.useContext(authenticationContext);

  return (
    <div className="top_navbar">
      <div className="search">
        <input
          className="top_navbar__search__input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="top_navbar__title">
        <h1>Hike</h1>
      </div>
      <div className="top_navbar__user__container">
        <div className="top_navbar__user">
          <div className="top_navbar__user__name">
            <span>John Doe</span>
          </div>
          <div className="top_navbar__user__img">
            <img
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
              alt="user"
            />
            <span className="status"></span>
          </div>
        </div>
        <div className="top_navbar__user__logout">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
