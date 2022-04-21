import React, { useState } from "react";

function TopMenu() {
  return (
    <React.Fragment>
      <ul className="nav__list flex-align-center u-padding-right-medium">
        <li>
          <a
            className="nav__link"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.facebook.com/lethanh.tuan.754703"
          >
            <ion-icon class="nav__icon" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a
            className="nav__link"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://github.com/tuan-hcmut"
          >
            <ion-icon class="nav__icon" name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a
            className="nav__link"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.facebook.com/lethanh.tuan.754703"
          >
            <ion-icon class="nav__icon" name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a
            className="nav__link"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.facebook.com/lethanh.tuan.754703"
          >
            <ion-icon class="nav__icon" name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <nav className="main-nav">
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="/">
              Contact
            </a>
          </li>

          <li>
            <a
              className="nav__link"
              href="https://www.facebook.com/lethanh.tuan.754703"
            >
              About me
            </a>
          </li>
        </ul>

        <ul className="nav__list">
          <li>
            <a
              className="nav__link"
              href="https://www.facebook.com/lethanh.tuan.754703"
            >
              Login
            </a>
          </li>

          <li>
            <a
              className="nav__link"
              href="https://www.facebook.com/lethanh.tuan.754703"
            >
              Register
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

function MainMenu() {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <React.Fragment>
      <div className="u-padding-right-big">
        <a href="/">
          <img className="nav__logo " alt="logo" src="logo192.png" />
        </a>
      </div>

      <div className="nav__main-header-left">
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="/">
              Home
            </a>
          </li>
          <li>
            <div className="nav__cascading-title">
              <a className="nav__link" href="/">
                Movies
                <ion-icon name="chevron-down-outline"></ion-icon>
              </a>

              <div className="nav__cascading-wrapper">
                <ul>
                  <li>
                    <a href="#" className="nav__link">
                      One Peace
                    </a>
                  </li>

                  <li>
                    <a href="#" className="nav__link">
                      One punch man
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="nav__cascading-title">
              <a className="nav__link" href="/">
                Game
                <ion-icon name="chevron-down-outline"></ion-icon>
              </a>

              <div className="nav__cascading-wrapper">
                <ul>
                  <li>
                    <a href="#" className="nav__link">
                      Soduku
                    </a>
                  </li>

                  <li>
                    <a href="#" className="nav__link">
                      Caro
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a className="nav__link" href="/">
              About Me
            </a>
          </li>
        </ul>

        <div className="nav__main-header-right">
          <a
            className="nav__link"
            href="#"
            onClick={() => setSearchBar(!searchBar)}
          >
            <div className="nav__search-icon">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </a>
          <div
            className="nav__search-form"
            style={{ display: searchBar ? "block" : "none" }}
          >
            <form method="get" role={"search"} action="#">
              <input
                type={"search"}
                aria-label={"Search"}
                defaultValue=""
                placeholder={"Type..."}
                className="nav__search-bar"
              />
              <input
                type={"submit"}
                value={"Search"}
                className="btn btn__sub-search"
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { TopMenu, MainMenu };
