const getToken = () => {
  return localStorage.getItem("token") || "";
};

const setToken = (newToken: string) => {
  localStorage.setItem("token", newToken);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export { getToken, setToken, removeToken };
