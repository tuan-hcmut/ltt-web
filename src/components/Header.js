import React from "react";
import { TopMenu, MainMenu } from "./nav";

function Header() {
  return (
    <React.Fragment>
      <div className="menu-top-header">
        <div className="containner">
          <div className="menu-top">
            <TopMenu />
          </div>
        </div>
      </div>

      <div className="main-header">
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
