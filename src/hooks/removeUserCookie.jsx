import Cookies from "js-cookie";

const RemoveUserCookie = (cookieName) => {
  return Cookies.remove(cookieName);
};

export default RemoveUserCookie;
