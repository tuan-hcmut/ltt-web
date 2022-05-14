import React, { useContext } from "react";
import AuthContext from "../../../context/authProvider";
import { Link as LinkRouter } from "react-router-dom";

function UserDB() {
  const { auth } = useContext(AuthContext);
  const data = JSON.parse(localStorage.getItem("user"));
  const user = data.data.user;

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
                YOUR DATABASE
              </h2>
              <ul className="data__list">
                <li>{`Token: ${data.token}`}</li>
                {Object.keys(user).map((el) => (
                  <li key={el}>{`${el}: ${user[el]}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDB;
