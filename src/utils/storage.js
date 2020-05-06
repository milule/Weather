function getToken() {
  return localStorage.getItem("token");
}

function getUsername() {
  return localStorage.getItem("username");
}

function setToken(token = "") {
  localStorage.setItem("token", token);
}

function checkToken(){
  return Boolean(getToken());
} 

function setUsername(name = "") {
  localStorage.setItem("username", name);
}


function clearStorage() {
  localStorage.clear();
}

export { getToken, getUsername, setToken, setUsername, checkToken, clearStorage };
