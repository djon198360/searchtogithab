export const MAIN_ROUTE = "/";
export const NOT_FOUND_ROUTE = "*";
export const SERVER_URL = "https://api.github.com/search/users";
export const isAuth = localStorage?.getItem("isAuth")
  ? JSON.parse(localStorage.getItem("isAuth"))
  : false;
