import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import AuthContext from "./../context/authProvider";

function TopMenu() {
  const { auth, logout } = useContext(AuthContext);
  const [userMode, setUserMode] = useState(false);

  const handleLogout = async () => {
    const res = await logout();
    return (window.location.href = "/");
  };
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

        {auth.data === undefined ? (
          <ul className="nav__list">
            <li>
              <LinkRouter className="nav__link" to={"/login"}>
                Login
              </LinkRouter>
            </li>

            <li>
              <LinkRouter className="nav__link" to={"signup"}>
                Register
              </LinkRouter>
            </li>
          </ul>
        ) : (
          <ul className="nav__list u-flex-gap-super-small">
            <li>
              {/* <div className="setting-mode">
                <ion-icon name="settings-outline"></ion-icon>
              </div> */}
            </li>
            <li>
              <LinkRouter className="nav__link" to={"/user/information"}>
                Hello, {auth.data.name}
              </LinkRouter>
            </li>
            <li
              className="user-mode"
              onClick={() => {
                setUserMode(!userMode);
              }}
            >
              <img
                src={
                  auth.data?.photo &&
                  `http://127.0.0.1:5000/img/users/${auth.data.photo}`
                }
                alt=""
              />
              <ul
                className="user-mode__list"
                style={{ display: userMode ? "block" : "none" }}
              >
                <li>
                  <LinkRouter className="nav__link" to={"/user/information"}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    Information
                  </LinkRouter>
                </li>
                <li>
                  <LinkRouter
                    className="nav__link"
                    to={"/logout"}
                    onClick={handleLogout}
                  >
                    <ion-icon name="log-out-outline"></ion-icon> Log Out
                  </LinkRouter>
                </li>
              </ul>
            </li>
          </ul>
        )}
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
          <img
            className="nav__logo "
            alt="logo"
            src="http://127.0.0.1:5000/img/cat.png"
          />
        </a>
      </div>

      <div className="nav__main-header-left">
        <ul className="nav__list">
          <li>
            <Link
              to="top-menu"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__link"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="nav__cascading-title">
              <Link
                to="movies"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav__link"
              >
                Movies
                <ion-icon name="chevron-down-outline"></ion-icon>
              </Link>

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
              <Link
                to="game"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav__link"
              >
                Game
                <ion-icon name="chevron-down-outline"></ion-icon>
              </Link>

              <div className="nav__cascading-wrapper">
                <ul>
                  <li>
                    <a href="#" className="nav__link">
                      Soduku
                    </a>
                  </li>

                  <li>
                    <LinkRouter to={"game/caro"} className="nav__link">
                      Caro
                    </LinkRouter>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link
              to="top-menu"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__link"
            >
              About Me
            </Link>
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
