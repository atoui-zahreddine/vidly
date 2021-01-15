import http from "./httpService";
import jwtDecode from "jwt-decode";

const token = "token";

http.setJwt(getToken());

async function login(user) {
  const { data: jwt } = await http.post("/auth", {
    email: user.username,
    password: user.password,
  });
  loginWithJwt(jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

function getToken() {
  return localStorage.getItem(token);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    return jwtDecode(jwt);
  } catch (e) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(token);
}

export default {
  loginWithJwt,
  logout,
  getCurrentUser,
  login,
  getToken,
};
