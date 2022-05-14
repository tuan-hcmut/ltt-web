import React, { useContext, useEffect, useState } from "react";
import { Link as LinkRouter, Navigate } from "react-router-dom";
import AuthContext from "../../context/authProvider";

function AdminManager() {
  const { auth, getAllUsers, removeUser } = useContext(AuthContext);
  if (auth.data && auth.data.role !== "admin") {
    window.alert("You do not have permission to perform this action");
    // window.location.href = "/";
    <Navigate to={"/"} />;
  }

  const getList = async () => {
    try {
      const list = await getAllUsers();
      setList(list);
    } catch (e) {
      window.alert(e);
    }
  };
  const [list, setList] = useState({});
  const [togle, setTogle] = useState([]);

  useEffect(() => {
    setList(getList());
  }, []);

  const handleTogle = (val) => {
    const newArr = togle.includes(val) ? togle.splice(val, 1) : [...togle, val];
    setTogle(newArr);
  };

  const handleRemoveUser = async (id) => {
    const res = await removeUser(id);

    res.status === "success"
      ? (window.location.href = "/user/information")
      : window.alert("Can not find this user with this id!!!");
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
                LIST USERS
              </h2>
              <ul className="data__list">
                {list === {} ? (
                  <div>Loading</div>
                ) : (
                  list.data?.users.map((el, index) => (
                    <li key={index}>
                      <h3 onClick={() => handleTogle(index)}>{el.name}</h3>
                      <p
                        className="user-manager__content"
                        style={{
                          display: togle.includes(index) ? "block" : "none",
                        }}
                      >
                        {JSON.stringify(el)}
                      </p>
                      <div
                        className="user-manager__options"
                        style={{
                          display: togle.includes(index) ? "block" : "none",
                        }}
                      >
                        <i onClick={() => handleRemoveUser(el._id)}>
                          Remove this user!!!
                        </i>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManager;
