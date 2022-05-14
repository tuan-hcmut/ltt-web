import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "./../../context/generalProvider";

function Chat(props) {
  const { socket } = useContext(GeneralContext);
  const [chat, setChat] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    socket.on("res-chat", (data) => {
      setContent(data.data);
    });
  }, []);

  const handleChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      player:
        socket.id === props.data.socket[0] ? props.data.host : props.data.enemy,
      chat: chat,
      roomId: props.data.boardInfor["room-id"],
      content: content,
    });
    setChat("");
  };
  return (
    <div className="chat-wrapper">
      <h2 className="heading-secondary">CHAT</h2>
      <div className="chat-content">
        {content.length > 0
          ? content.map((el, index) => (
              <div key={index} className="chat-content__inner">
                <img
                  src={`http://127.0.0.1:5000/img/users/${el.photo}`}
                  alt=""
                />
                <p> {el.content}</p>
              </div>
            ))
          : ""}
      </div>
      <form onSubmit={handleChat} className="chat-input">
        <input
          type={"text"}
          placeholder="chat..."
          maxLength={40}
          style={{ padding: "0.75rem 1.75rem", borderRadius: "0" }}
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <ion-icon name="send-outline"></ion-icon>
      </form>
    </div>
  );
}

export default Chat;
