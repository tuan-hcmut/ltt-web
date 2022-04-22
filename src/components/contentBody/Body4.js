import React, { useState } from "react";

const titles = ["Chess", "Caro", "Sudoku"];
const imgUrl = ["chess.jpg", "caro.jpg", "sudoku.jpg"];
const description = [
  "Cờ vua còn được gọi là cờ phương Tây, là một trò chơi board game dành cho hai người ...",
  "Người thắng là người đầu tiên có được một chuỗi liên tục gồm 4 quân hàng ngang, hoặc dọc, hoặc chéo...",
  "Sudoku, ban đầu có tên gọi là Number Place là một trò chơi câu đố sắp xếp chữ số dựa trên logic theo tổ hợp...",
];

function Body4() {
  const [Loading, setLoading] = useState(true);

  return (
    <div className="content-games u-margin-bottom-big">
      <div className="containner">
        <div className="content-games-heading heading-secondary">
          <h2>Game</h2>
        </div>
        <div className="content-games-inner">
          <div className="content-games-cards">
            {titles.map((title, index) => (
              <div
                className="content-games-card"
                key={index}
                style={{ display: index === 2 && Loading ? "none" : "block" }}
              >
                <div className="content-border">
                  <div
                    className="content-games-card__img"
                    style={{
                      backgroundImage: `url(${imgUrl[index]})`,
                    }}
                  ></div>
                  <div className="content-games-card__infor">
                    <div className="content-games-card__infor-title heading-third">
                      <h2>{title}</h2>
                    </div>
                    <div className="content-games-card__infor-description">
                      {description[index]}
                    </div>
                    <div className="content-games-card__remainning">
                      <div className="content-games-card__remainning-1">
                        <div className="played-count">
                          <ion-icon name="person-outline"></ion-icon>
                          675
                        </div>
                        <div className="rating">
                          <i
                            style={{
                              paddingTop: 2,
                              color: "yellow",
                            }}
                          >
                            {[0, 1, 2, 3, 4].map((start) => (
                              <ion-icon
                                name="star-outline"
                                key={start}
                              ></ion-icon>
                            ))}{" "}
                          </i>
                          (4.7)
                        </div>
                        <div className="comment">
                          <ion-icon name="chatbox-ellipses-outline"></ion-icon>{" "}
                          341
                        </div>
                      </div>
                      <div className="btn btn-play">Play Now</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className=" btn-loading">
              <span
                className="btn"
                onClick={() => setLoading(false)}
                style={{ display: Loading ? "inline-block" : "none" }}
              >
                Load More...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body4;
