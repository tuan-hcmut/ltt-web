import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "./../../context/generalProvider";
import InforPlayers from "./InforPlayers";
import BoardCaro from "./BoardCaro";
import Chat from "./Chat";

function Battle() {
  const { socket } = useContext(GeneralContext);
  const { id } = useParams();
  const [dataPlayer, setDataPlayer] = useState(undefined);
  const [turn, setTurn] = useState("");

  useEffect(() => {
    socket.emit("infor-battle", id);
    socket.on("res-infor-battle", (data) => {
      if (data.enemy && data.host) {
        setDataPlayer(data);
        setTurn(data.boardInfor.weapon);
      }
    });
  }, []);

  const nextTurn = (val) => {
    setTurn(val);
  };
  return (
    <>
      {dataPlayer ? (
        <div className="battle-containner">
          <div className="containner">
            <div className="battle-top__content">
              <h2>next Turn: </h2>
              <p
                className={`weapon-${turn}`}
                style={{ marginBottom: 2, marginLeft: 2 }}
              >
                {turn}
              </p>
            </div>
            <div className="battle-containner__infor">
              <InforPlayers data={dataPlayer} />
              <BoardCaro
                data={dataPlayer}
                turn={turn}
                nextTurn={(el) => nextTurn(el)}
              />
              <Chat data={dataPlayer} />
            </div>
          </div>
        </div>
      ) : (
        <p className="err-mess">Page Not found!!!</p>
      )}
    </>
  );
}

export default Battle;
