import React, { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import AuthContext from "./authProvider";

const socket = io.connect("http://127.0.0.1:5000");

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  const [Scroll, setScroll] = useState(false);
  const { auth } = useContext(AuthContext);
  socket.emit("add-user", auth);
  useEffect(() => {
    const scrollToTop = () => {
      setScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", scrollToTop);

    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  return (
    <GeneralContext.Provider value={{ Scroll, setScroll, socket }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
