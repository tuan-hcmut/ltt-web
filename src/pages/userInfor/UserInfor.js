import React, { useContext, useState } from "react";
import AuthContext from "../../context/authProvider";
import { Link as LinkRouter } from "react-router-dom";

function UserInfor() {
  const { auth, updateAccount, updatePassword } = useContext(AuthContext);

  const [accountInfor, setAccountInfor] = useState({
    name: auth.data.name,
    photo: [],
  });
  const [passwordSetting, SetPasswordSetting] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });

  const handleAccount = (e) => {
    setAccountInfor({
      ...accountInfor,
      [e.target.name]:
        e.target.name === "photo" ? e.target.files[0] : e.target.value,
    });
  };

  const handlePassword = (e) => {
    SetPasswordSetting({ ...passwordSetting, [e.target.name]: e.target.value });
  };

  const handleSubmitAccount = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", accountInfor.name);
    data.append("id", auth.data._id);
    data.append("photo", accountInfor.photo);
    await updateAccount(data);
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    passwordSetting.userId = auth.data._id;
    await updatePassword(passwordSetting);
  };

  return (
    <div className="infor-containner">
      <div className="containner">
        <div className="user-view">
          <div className="user-view__menu">
            <ul className="side-nav">
              <li className="side-nav--active">
                <LinkRouter to={"/user/information"}>
                  <ion-icon name="settings-outline"></ion-icon>SETTTINGS
                </LinkRouter>
              </li>
              <li>
                <LinkRouter to={`/user/information/${auth.data._id}`}>
                  <ion-icon name="document-text-outline"></ion-icon>
                  YOUR DATABASE
                </LinkRouter>
              </li>

              <li>
                <LinkRouter to={`/user/restrict/manager`}>
                  <ion-icon name="server-outline"></ion-icon>
                  MANAGER USERS
                </LinkRouter>
              </li>
            </ul>
          </div>
          <div className="user-view__content">
            <div className="user-view__form-containner">
              <h2 className="heading-primary u-margin-bottom-medium">
                YOUR ACCOUNT SETTINGS
              </h2>
              <form onSubmit={handleSubmitAccount}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-input"
                    id="name"
                    type={"text"}
                    name="name"
                    minLength={3}
                    value={accountInfor.name}
                    onChange={handleAccount}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="form-input"
                    id="email"
                    type={"email"}
                    name="email"
                    value={auth.data.email}
                    readOnly
                  />
                </div>

                <div className="form-group form-photo">
                  <img
                    className="form-user-photo"
                    src={`http://127.0.0.1:5000/img/users/${auth.data.photo}`}
                    alt=""
                  />
                  <input
                    className="form-upload"
                    type={"file"}
                    accept="image/*"
                    id="photo"
                    name="photo"
                    onChange={handleAccount}
                  />
                  <label htmlFor="photo">Choose new photo</label>
                </div>

                <div className="btn-login flex-right-content">
                  <button className="btn">SAVE SETTINGS</button>
                </div>
              </form>
            </div>

            <div className="line">&nbsp;</div>
            <div className="user-view__form-containner">
              <h2 className="heading-primary u-margin-bottom-medium">
                PASSWORD SETTINGS
              </h2>
              <form onSubmit={handleSubmitPassword}>
                <div className="form-group">
                  <label className="form-label" htmlFor="password-current">
                    Current password
                  </label>
                  <input
                    className="form-input"
                    id="password-current"
                    name="currentPassword"
                    onChange={handlePassword}
                    type={"password"}
                    placeholder="••••••••"
                    required="required"
                    minLength={8}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="new-password">
                    New password
                  </label>
                  <input
                    className="form-input"
                    id="new-password"
                    name="newPassword"
                    onChange={handlePassword}
                    type={"password"}
                    placeholder="••••••••"
                    required="required"
                    minLength={8}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password-confirm">
                    Password confirm
                  </label>
                  <input
                    className="form-input"
                    id="password-confirm"
                    name="passwordConfirm"
                    onChange={handlePassword}
                    type={"password"}
                    placeholder="••••••••"
                    required="required"
                    minLength={8}
                  />
                </div>

                <div className="btn-login flex-right-content">
                  <button className="btn">SAVE SETTINGS</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfor;
