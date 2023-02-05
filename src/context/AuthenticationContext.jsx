import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SetUserCookie from "../hooks/SetUserCookie";
import GetUserCookie from "../hooks/GetUserCookie";
import RemoveUserCookie from "../hooks/RemoveUserCookie";

export const authenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(() => {
    return GetUserCookie();
  });

  React.useEffect(() => {
    const userCookie = GetUserCookie();
    if (userCookie) {
      setUserId(userCookie);
    }
  }, []);

  const login = (userId) => {
    SetUserCookie("user", userId);
    setUserId(userId);
    navigate("/");
  };

  const logout = () => {
    RemoveUserCookie("user");
    setUserId(null);
    navigate("/");
  };

  const value = useMemo(() => {
    return { userId, login, logout };
  }, [userId]);

  return (
    <authenticationContext.Provider value={value}>
      {children}
    </authenticationContext.Provider>
  );
};

export default AuthenticationProvider;
