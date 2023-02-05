import Cookies from "js-cookie";

const GetUserCookie = (cookieName) => {
  return Cookies.get(cookieName);
};

export default GetUserCookie;
