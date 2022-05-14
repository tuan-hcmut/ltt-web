export default function authHeader() {
  let user;
  if (localStorage.getItem("user"))
    user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
