import { JwtPayload } from "../Interfaces";
import jwtDecode from "jwt-decode";

const getToken = () => {
  return localStorage.getItem("token") || "";
};

const setToken = (newToken: string) => {
  localStorage.setItem("token", newToken);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const getDecodedToken = (token: string) => {
  const jwtPayload: JwtPayload = jwtDecode(token);
  return jwtPayload.unique_name;
};

export { getToken, setToken, removeToken, getDecodedToken };
