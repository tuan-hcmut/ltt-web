import React from "react";
import { TopMenu } from "./nav";

function Header() {
  return (
    <div className="menu-top-header">
      <div className="containner">
        <div className="menu-top">
          <TopMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
