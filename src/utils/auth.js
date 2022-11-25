import jwt_decode from "jwt-decode";

export default function isAuthenticated() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (!token) {
    return false;
  }
  
  const { exp } = jwt_decode(token);

  if (Date.now() >= exp * 1000) {
    return false;
  }

  return true;
}