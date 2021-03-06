import axios from "axios";

export default {

  // User API Calls
  userLogin: function (email, password) {
    return axios.post("/api/user/login", {
      email: email,
      password: password,
    });
  },

  userRegister: function (email, password) {
    return axios.post("/api/user/register", {
      email: email,
      password: password,
    });
  },

}