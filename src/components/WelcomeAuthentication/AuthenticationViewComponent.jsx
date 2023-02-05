import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";

import "./AuthenticationViewComponent.css";
import { authenticationContext } from "../../context/AuthenticationContext";

const AuthenticationViewComponent = () => {
  const { login } = useContext(authenticationContext);
  const [userAuthenticationData, setUserAuthenticationData] = React.useState({
    email: "",
    password: "",
  });

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const onChange = (e) => {
    setUserAuthenticationData({
      ...userAuthenticationData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(1);
  };

  return (
    <div className="authentication_view_component__container">
      <div className="authentication_view_component__form__container">
        <div className="authentication_view_component__title">
          <h1>Log In</h1>
        </div>
        <form
          className="authentication_view_component__form"
          onSubmit={onSubmit}
        >
          <div className="authentication_view_component__form__input__container">
            <div className="authentication_view_component__form__input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={onChange} />
            </div>
            <div className="authentication_view_component__form__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="authentication_view_component__container__button__login">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="authentication_view_component__form__social">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationViewComponent;
