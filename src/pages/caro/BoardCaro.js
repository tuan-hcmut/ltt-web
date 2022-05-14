import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "./../../context/generalProvider";
import { checkIsWin } from "./checkWin";

function BoardCaro(props) {
  const numTile = 494;
  const { socket } = useContext(GeneralContext);
  const [board, setBoard] = useState(new Array(numTile).fill(""));
  const [isWin, setIsWin] = useState(false);
  let weapon;

  if (props.data.socket[0] === socket.id) {
    weapon = props.data.boardInfor.weapon;
  } else {
    weapon = props.data.boardInfor.weapon === "o" ? "x" : "o";
  }

  useEffect(() => {
    socket.on("res-next-step", (data) => {
      setBoard(data.board);
      props.nextTurn(data.nextTurn);
    });

    socket.on("res-win", (data) => {
      window.alert(
        `${data.weapon} WIN!!!!. ${
          data.weapon === weapon ? "Ban nhan dc " : "Ban bi tru "
        }${data.deposit} coin.`
      );
      setIsWin(true);
    });
  }, []);

  const handleCaroStep = (e) => {
    if (props.turn === weapon && board[e.target.id] === "" && !isWin) {
      board[e.target.id] = weapon;
      socket.emit("next-step", {
        board,
        roomId: props.data.boardInfor["room-id"],
        nextTurn: weapon === "o" ? "x" : "o",
      });

      if (checkIsWin(board, e.target.id * 1, weapon)) {
        socket.emit("win", {
          weapon,
          socketId: socket.id,
          roomId: props.data.boardInfor["room-id"],
          deposit: props.data.boardInfor.deposit,
        });
      }
    }
  };

  return (
    <div className="board-caro">
      {board.map((el, index) => (
        <div
          key={index}
          className={`tile-caro weapon-${el}`}
          id={index}
          onClick={handleCaroStep}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default BoardCaro;
