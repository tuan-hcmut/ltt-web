import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../context/authProvider";
import { Link as LinkRouter } from "react-router-dom";

function SignUp() {
  const userRef = useRef();
  const { signin } = useContext(AuthContext);
  const [errMess, setErrMess] = useState("");
  const [signUp, setSignUp] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // if (localStorage.getItem("user")) window.location.href = "/";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const signUpForm = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signin(signUp);
      if (res?.status === "fail") setErrMess(`❌ ${res.message}`);
      else if (res === undefined) setErrMess(`❌ Invalid Information`);
      else {
        window.location.href = "/";
      }
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <div className="login">
      <div className="containner">
        <div className="containner-login">
          <div className="logo-login">
            <LinkRouter to={"/"}>
              <img
                src="http://127.0.0.1:5000/img/cat.png"
                alt=""
                className="nav__logo"
              />
            </LinkRouter>
          </div>

          <div className="content-login">
            <div className="title-login">SIGN UP</div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="form-input"
                  id="name"
                  name="userName"
                  type={"text"}
                  placeholder=""
                  minLength={1}
                  maxLength={20}
                  onChange={signUpForm}
                  value={signUp.userName}
                  ref={userRef}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type={"email"}
                  placeholder="you@example.com"
                  onChange={signUpForm}
                  value={signUp.email}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input"
                  id="password"
                  name="password"
                  type={"password"}
                  placeholder="••••••••"
                  onChange={signUpForm}
                  value={signUp.password}
                  required
                  minLength={"8"}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="passwordConfirm">
                  Password Confirm
                </label>
                <input
                  className="form-input"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  type={"password"}
                  placeholder="••••••••"
                  onChange={signUpForm}
                  value={signUp.passwordConfirm}
                  required
                  minLength={"8"}
                />
              </div>

              <p className="err-mess">{errMess}</p>

              <div className="form-group">
                <div className="btn-login">
                  <button className="btn">Đăng Kí</button>
                </div>
              </div>
            </form>
            <p className="line-login">OR</p>
            <LinkRouter className="signup-suggest" to={"/login"}>
              Đăng Nhập
            </LinkRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
