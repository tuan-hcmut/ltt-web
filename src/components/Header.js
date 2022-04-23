import React, { useEffect, useState } from "react";
import { TopMenu, MainMenu } from "./nav";

function Header() {
  const [Header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="menu-top-header" id="top-menu">
        <div className="containner">
          <div className="menu-top">
            <TopMenu />
          </div>
        </div>
      </div>

      <div className="main-header" style={{ position: Header ? "fixed" : "" }}>
        <div className="containner">
          <div className="main-menu">
            <MainMenu />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
