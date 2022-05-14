import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../context/authProvider";
import { Link as LinkRouter } from "react-router-dom";

function Login() {
  const userRef = useRef();
  const { login, auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMess, setErrMess] = useState("");

  // if (localStorage.getItem("user")) window.location.href = "/";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      if (res?.status === "fail") setErrMess(`❌ ${res.message}`);
      else {
        setEmail("");
        setPassword("");
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
            <div className="title-login">LOG INTO YOUR ACCOUNT</div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form-input"
                  id="email"
                  type={"email"}
                  placeholder="you@example.com"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  type={"password"}
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  minLength={"8"}
                />
              </div>
              <p className="err-mess">{errMess}</p>
              <div className="form-group">
                <div className="btn-login">
                  <button className="btn">Đăng Nhập</button>
                  <a href="#">Quên Mật Khẩu ???</a>
                </div>
              </div>
            </form>
            <p className="line-login">OR</p>
            <LinkRouter className="signup-suggest" to={"/signup"}>
              Tạo Tài Khoản Mới
            </LinkRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
