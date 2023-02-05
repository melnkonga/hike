import Cookies from "js-cookie";

const SetUserCookie = (cookieName, userId) => {
  Cookies.set(cookieName, userId, {
    expires: 1,
    path: "/",
    secure: true,
    sameSite: "strict",
  });
};

export default SetUserCookie;
