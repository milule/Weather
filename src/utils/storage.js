export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const setToken = (token = "") => {
  localStorage.setItem("token", token);
};

export const setUsername = (name = "") => {
  localStorage.setItem("username", name);
};

export const clearStorage = () => {
  localStorage.clear();
};
