import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./../../context/generalProvider";
import AuthContext from "../../context/authProvider";
import RoomInfor from "./RoomInfor";
import { useNavigate } from "react-router-dom";

function CaroGame() {
  let navigate = useNavigate();
  const { socket } = useContext(GeneralContext);
  const { auth } = useContext(AuthContext);
  const [errMess, setErroMess] = useState("");
  const [listOnline, setListOnline] = useState({});
  const [addNewRoom, setAddNewRoom] = useState(undefined);
  const [waiting, setWaiting] = useState(undefined);

  useEffect(() => {
    let waitingTime;
    socket.on("res-add-caro-room", (data) => {
      if (data.message === "fail") {
        setErroMess("Phong da ton tai!!!");
      } else {
        setAddNewRoom(data.data);
        waitingTime = setInterval(() => {
          setWaiting((pre) => {
            if (pre === undefined) return "Dang Tim Doi Thu";
            else if (pre === "Dang Tim Doi Thu") return "Dang Tim Doi Thu.";
            else if (pre === "Dang Tim Doi Thu.") return "Dang Tim Doi Thu..";
            else if (pre === "Dang Tim Doi Thu..") return "Dang Tim Doi Thu...";
            else return "Dang Tim Doi Thu";
          });
        }, 1000);

        socket.on("res-join-room", (data) => {
          if (data.message === "success")
            navigate(`playonline/room/${data.data}`);
        });
      }
    });
    socket.emit("get-list-online", "");
    socket.on("list-online", (data) => {
      setListOnline(data);
    });

    return () => {
      clearInterval(waitingTime);
    };
  }, []);

  const [dataRoom, setDataRoom] = useState({
    time: "",
    weapon: "",
    deposit: "",
    "room-id": "",
  });
  const handleData = (e) => {
    setDataRoom({
      ...dataRoom,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    dataRoom.deposit * 1 > auth.data.coin
      ? setErroMess("Khong du coin!!!")
      : socket.emit("add-caro-room", dataRoom);
  };

  return (
    <div className="caro-lobby">
      <div className="containner">
        <div className="caro-containner">
          <div className="caro-setting">
            {waiting ? (
              <p
                className="err-mess"
                style={{ textAlign: "center", fontSize: 20 }}
              >
                {waiting}
              </p>
            ) : (
              <>
                <div className="caro-join-room">
                  <h2 className="heading-primary u-margin-bottom-small">
                    JOIN ROOM
                  </h2>
                  <div className="caro-join-room__content">
                    <div className="form-group">
                      <label className="form-label" htmlFor="join">
                        ID:
                      </label>
                      <input
                        className="form-input"
                        id="join"
                        type={"text"}
                        name="name"
                        minLength={1}
                        maxLength={9}
                      />
                    </div>

                    <div className="btn-login">
                      <button className="btn">JOIN</button>
                    </div>
                  </div>
                </div>
                <div className="caro-create-room">
                  <h2 className="heading-primary u-margin-bottom-small">
                    CREATE ROOM
                  </h2>
                  <form onSubmit={handleSubmitData}>
                    <div className="form-group">
                      <div className="form-label">Thoi Gian Moi Luot: </div>
                      {["5s", "15s", "30s", "60s"].map((el, index) => (
                        <div key={index} style={{ display: "flex" }}>
                          <label htmlFor={`${el}`}>{el}</label>
                          <input
                            id={`${el}`}
                            value={`${el}`}
                            type={"radio"}
                            name="time"
                            onChange={handleData}
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <div className="form-group">
                      <div className="form-label">Chon Quan: </div>
                      <input
                        id={`x`}
                        value={`x`}
                        type={"radio"}
                        name="weapon"
                        onChange={handleData}
                        required
                      />
                      <label
                        htmlFor="x"
                        className="weapon-x u-margin-right-medium"
                      >
                        X
                      </label>
                      <input
                        id={`o`}
                        value={`o`}
                        type={"radio"}
                        name="weapon"
                        onChange={handleData}
                        required
                      />
                      <label htmlFor="o" className="weapon-o">
                        O
                      </label>
                    </div>

                    <div className="form-group" style={{ width: "70%" }}>
                      <label className="form-label" htmlFor="deposit">
                        Cuoc:
                      </label>
                      <input
                        className="form-input"
                        id="deposit"
                        type={"text"}
                        name="deposit"
                        minLength={1}
                        maxLength={9}
                        onChange={handleData}
                        required
                      />
                    </div>

                    <div className="form-group" style={{ width: "70%" }}>
                      <label className="form-label" htmlFor="room-id">
                        Room ID:
                      </label>
                      <input
                        className="form-input"
                        id="room-id"
                        type={"text"}
                        name="room-id"
                        minLength={1}
                        maxLength={9}
                        onChange={handleData}
                        required
                      />
                    </div>
                    <p className="err-mess">{errMess}</p>
                    <div className="btn-login">
                      <button className="btn">CREATE</button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
          <div className="caro-online">
            <div className="caro-fighting-room">
              <h2 className="heading-primary u-margin-bottom-small">
                FIGHTING ROOM
              </h2>

              <ul>
                {addNewRoom ? (
                  <li>
                    <RoomInfor data={addNewRoom} />
                  </li>
                ) : (
                  ""
                )}
                {listOnline.roomsInfor ? (
                  Object.keys(listOnline.roomsInfor).map((el, index) => (
                    <li key={index}>
                      <RoomInfor
                        data={{
                          time: listOnline.roomsInfor[el].time,
                          weapon: listOnline.roomsInfor[el].weapon,
                          deposit: listOnline.roomsInfor[el].deposit,
                          "room-id": listOnline.roomsInfor[el]["room-id"],
                        }}
                      />
                    </li>
                  ))
                ) : (
                  <p className="err-mess">loading...</p>
                )}
              </ul>
            </div>
            <div className="user-online">
              <h2 className="heading-primary u-margin-bottom-small">
                USER ONLINE
              </h2>
              <ul>
                {listOnline.clients ? (
                  Object.keys(listOnline.clients).map((el, index) => (
                    <li key={index}>
                      <img
                        src={`http://127.0.0.1:5000/img/users/${listOnline.clients[el].photo}`}
                        alt=""
                      />
                      {listOnline.clients[el].name}
                    </li>
                  ))
                ) : (
                  <p className="err-mess">loading...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaroGame;
