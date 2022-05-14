import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import authHeader from "./../service/service";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const currentUser = await axios({
          method: "POST",
          url: "http://127.0.0.1:5000/isloggin",
          data: {
            token: authHeader().Authorization?.split(" ")[1],
          },
        });
        if (currentUser.data.data) {
          /// update user if exist
          const user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            user.data.user = currentUser.data.data;
            localStorage.setItem("user", JSON.stringify(user));
          }
        }

        setAuth(currentUser.data);
      } catch (e) {}
    };
    isLoggedIn();
  }, []);

  const alertMess = (mess) => {
    window.alert(mess);
    window.location.reload();
  };

  const login = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/login",
        data,
      });

      if (res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  const signin = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/signup",
        data,
      });

      if (res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  const logout = async () => {
    try {
      if (localStorage.getItem("user")) localStorage.removeItem("user");

      const res = await axios({
        method: "GET",
        url: "http://127.0.0.1:5000/logout",
      });
    } catch (e) {
      window.alert(e);
    }
  };
  const updateAccount = async (data) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: "http://127.0.0.1:5000/user/information/update",
        data,
      });
      if (res.data.status === "success") {
        res.data.token = authHeader().Authorization?.split(" ")[1]; //// change infor, so it no need to change token
        localStorage.setItem("user", JSON.stringify(res.data));

        alertMess("Update success!!!");
      } else {
      }
      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  const updatePassword = async (data) => {
    try {
      const res = await axios({
        method: "PATCH",
        url: "http://127.0.0.1:5000/user/information/updatepassword",
        data,
      });

      if (res.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.data));
        alertMess("Update success!!!");
      } else {
        window.alert(res.data.message);
      }

      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://127.0.0.1:5000/user/restrict/manager`,
      });

      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  const removeUser = async (id) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `http://127.0.0.1:5000/user/restrict/manager/remove/${id}`,
      });

      if (res.data.status === "success") window.alert("Remove success!!!");

      return res.data;
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        signin,
        logout,
        updateAccount,
        updatePassword,
        getAllUsers,
        removeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
