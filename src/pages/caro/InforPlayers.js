import React from "react";

function InforPlayers(props) {
  return (
    <div className="infor-players">
      <div className="infor-host">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={`http://127.0.0.1:5000/img/users/${props.data.host.photo}`}
            alt=""
          />
        </div>

        <p>Name: {props.data.host.name}</p>
        {/* <p>ID: {props.data.host._id}</p> */}
        <p>Gmail: {props.data.host.email}</p>
        <p>Coins: {props.data.host.coin}</p>
        <div>
          Play:
          <p
            className={`weapon-${props.data.boardInfor.weapon}`}
            style={{ display: "inline-block" }}
          >
            {props.data.boardInfor.weapon}
          </p>
        </div>
      </div>
      <div className="infor-enemy">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={`http://127.0.0.1:5000/img/users/${props.data.enemy.photo}`}
            alt=""
          />
        </div>

        <p>Name: {props.data.enemy.name}</p>
        {/* <p>ID: {props.data.enemy._id}</p> */}
        <p>Gmail: {props.data.enemy.email}</p>
        <p>Coins: {props.data.enemy.coin}</p>
        <div>
          Play:
          <p
            style={{ display: "inline-block" }}
            className={`weapon-${
              props.data.boardInfor.weapon === "o" ? "x" : "o"
            }`}
          >
            {props.data.boardInfor.weapon === "o" ? "x" : "o"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InforPlayers;
