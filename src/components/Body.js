import React from "react";

function SlideShow() {
  return (
    <div className="slider-containner">
      <div className="slides">
        <input type={"radio"} name="radio-btn" id="radio1" />
        <input type={"radio"} name="radio-btn" id="radio2" />
        <input type={"radio"} name="radio-btn" id="radio3" />
        <input type={"radio"} name="radio-btn" id="radio4" />

        <div className="slide">
          <div
            className="slide__img1"
            role={"img"}
            aria-label="one-peace"
          ></div>

          <div className="slide__img2" role={"img"} aria-label="caro"></div>

          <div className="slide__img3" role={"img"} aria-label="chess"></div>
        </div>
      </div>
    </div>
  );
}

export { SlideShow };
