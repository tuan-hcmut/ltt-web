import React, { useContext } from "react";
import { Link } from "react-scroll";
import GeneralContext from "./../context/generalProvider";
function Footer() {
  const { Scroll } = useContext(GeneralContext);
  return (
    <React.Fragment>
      <div className="footer">
        <div className="containner">
          <div className="footer-wrapper">
            <div className="footer-wrapper__logo">
              <div className="logo">
                <img
                  className="nav__logo "
                  alt="logo"
                  src="http://127.0.0.1:5000/img/cat.png"
                />
              </div>
              <p>
                LTT is an online platform that using for entertainment purposes.
              </p>
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
                    <ion-icon
                      class="nav__icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-wrapper__contact">
              <div className="heading-fourth">Contact</div>
              <div className="sdt">
                <ion-icon name="call-outline"></ion-icon>
                <p>0377239677</p>
              </div>
              <div className="mail">
                <ion-icon name="mail-outline"></ion-icon>
                <p> tuan01677239677@gmail.com</p>
              </div>
            </div>
            <div className="footer-wrapper__nav">
              <div className="heading-fourth">Account</div>
              <p>Login</p>
              <p>Sign In</p>
              <p>Imformation</p>
            </div>
            <div className="footer-wrapper__nav">
              <div className="heading-fourth">Navigation</div>
              <p>Home</p>
              <p>Movies</p>
              <p>Games</p>
              <p>About Me</p>
            </div>
          </div>
        </div>
        <div className="reserved">
          Copyright © Le Thanh Tuan. All rights reserved.
        </div>
      </div>
      <Link
        to="top-menu"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="scroll-to-top btn"
        style={{ bottom: Scroll ? 70 : -70 }}
      >
        <ion-icon name="chevron-up-outline"></ion-icon>
      </Link>
    </React.Fragment>
  );
}

export default Footer;
