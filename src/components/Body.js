import React, { useEffect, useState } from "react";

const radio = ["radio1", "radio2", "radio3"];

function SlideShow() {
  const [reSize, setReSize] = useState(window.screenX);
  const [fillDot, setFillDot] = useState("radio1");

  const handleFillDot = (val) => {
    setFillDot();
  };

  useEffect(() => {
    const handleScroll = () => {
      setReSize(window.innerWidth);
    };
    window.addEventListener("resize", handleScroll);
  }, []);

  return (
    <div className="slider-containner">
      <div className="slides">
        {radio.map((radio) => {
          return (
            <input type={"radio"} name="radio-btn" id={radio} key={radio} />
          );
        })}

        <div className="slide first">
          <img src="one-peace.jpg" alt="" style={{ width: reSize }} />
        </div>
        <div className="slide">
          <img src="caro.jpg" alt="" style={{ width: reSize }} />
        </div>
        <div className="slide">
          <img src="chess.jpg" alt="" style={{ width: reSize }} />
        </div>
      </div>
      <div className="slide-manual">
        {/* lable its will link to the its input so when you click it will checked this input */}

        {radio.map((radio) => {
          let color = radio === fillDot ? "#2568ef" : "transparent";
          return (
            <label
              htmlFor={radio}
              className="manual-btn"
              key={radio}
              style={{ backgroundColor: color }}
              // onChange={setFillDot(radio)}
            ></label>
          );
        })}
      </div>
    </div>
  );
}

export { SlideShow };
