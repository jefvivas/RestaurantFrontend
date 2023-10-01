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
const getAdminToken = () => {
  return localStorage.getItem("adminToken") || "";
};

const setAdminToken = (newToken: string) => {
  localStorage.setItem("adminToken", newToken);
};

const removeAdminToken = () => {
  localStorage.removeItem("adminToken");
};

export {
  getToken,
  setToken,
  removeToken,
  getDecodedToken,
  getAdminToken,
  removeAdminToken,
  setAdminToken,
};
