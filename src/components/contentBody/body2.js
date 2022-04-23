import React from "react";

const titles = [
  "Venom",
  "Rô-bốt biết yêu – WALL-E",
  "Cuộc chiến không trọng lực – Gravity",
  "Biệt đội Big Hero 6 – Big Hero 6",
  "Logan: Người sói – Logan (2017)",
  "Welcome to the Jungle – Trò Chơi Kỳ Ảo",
  "quá nhanh quá nguy hiểm 8",
  "Avengers: Infinity War",
];

const imgUrl = [
  "venom.jpg",
  "wall-e.jpg",
  "gravity.jpg",
  "Big-Hero-6.jpg",
  "logan.jpg",
  "the-jungle.jpg",
  "fast-furious.jpg",
  "marvel.jpg",
];

function Body2() {
  return (
    <div className="content-movies u-margin-bottom-big" id="movies">
      <div className="containner">
        <div className="content-movies-heading heading-secondary">
          <h2>Movies</h2>
        </div>
        <div className="content-movies-inner">
          <div className="content-movies-cards">
            {titles.map((content, index) => (
              <div className="content-movies-card" key={index}>
                <div className="content-movies-card__hidden-over">
                  <div
                    className="content-movies-card__img"
                    style={{
                      backgroundImage: `url(${imgUrl[index]})`,
                    }}
                  ></div>
                </div>
                <div className="content-movies-card__content">
                  {content} something have no meaning...
                </div>

                <div className="content-movies-card__title">{content}</div>
              </div>
            ))}
            {/* better to make pagination */}
            <div className=" btn-loading">
              <span className="btn">Load More...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body2;
