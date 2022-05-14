import React, { useContext, useState } from "react";
import GeneralContext from "./../../context/generalProvider";
import { useNavigate } from "react-router-dom";

function RoomInfor(props) {
  const { socket } = useContext(GeneralContext);
  const [errMess, setErrMess] = useState(undefined);
  let navigate = useNavigate();

  const handleFighting = (e) => {
    socket.emit("join-room", e.target.id);
    socket.on("res-join-room", (data) => {
      if (data.message !== "success") setErrMess(data.message);
      else {
        navigate(`playonline/room/${data.data}`);
      }
    });
  };
  return (
    <>
      <div className="room-infor-wrapper">
        <div className="num-player">
          <ion-icon name="people-outline"></ion-icon>
          <div>1</div>
        </div>

        <div className="room-id">
          <ion-icon name="key-outline"></ion-icon>
          <div>{props.data["room-id"]}</div>
        </div>

        <div className="num-deposit">
          <ion-icon name="logo-bitcoin"></ion-icon>
          <div>{props.data.deposit}</div>
        </div>

        <div className="your-weapon">
          <ion-icon name="construct-outline"></ion-icon>
          <div>{props.data.weapon}</div>
        </div>
      </div>

      {errMess ? (
        <p
          className="err-mess"
          style={{ paddingBottom: 0, paddingTop: 15, paddingRight: 10 }}
        >
          {errMess}
        </p>
      ) : (
        <div
          className="fighting-btn"
          id={props.data["room-id"]}
          onClick={handleFighting}
        >
          <ion-icon name="enter-outline"></ion-icon> Fight
        </div>
      )}
    </>
  );
}

export default RoomInfor;
