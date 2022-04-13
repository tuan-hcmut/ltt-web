import React from "react";

function TopMenu() {
  return (
    <ul className="nav__icons">
      <li>
        <a
          className="nav__link"
          href="https://www.facebook.com/lethanh.tuan.754703"
        >
          <ion-icon class="nav__icon" name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a className="nav__link" href="https://github.com/tuan-hcmut">
          <ion-icon class="nav__icon" name="logo-github"></ion-icon>
        </a>
      </li>
      <li>
        <a
          className="nav__link"
          href="https://www.facebook.com/lethanh.tuan.754703"
        >
          <ion-icon class="nav__icon" name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li>
        <a
          className="nav__link"
          href="https://www.facebook.com/lethanh.tuan.754703"
        >
          <ion-icon class="nav__icon" name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
  );
}

function MainMenu() {
  return <div></div>;
}

export { TopMenu, MainMenu };
