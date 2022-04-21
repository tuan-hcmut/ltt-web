import React, { useEffect, useState } from "react";
// import axios from "axios";

const backGroundImg = ["one-peace.jpg", "one-punch-man.jpg", "chess.jpg"];
const nameCommics = ["One Peace", "One Punch Man", "Chess"];
const nameAuthors = ["Eiichiro Oda", "ONE", "Not Found"];
const readingMore = [
  "https://en.wikipedia.org/wiki/One_Piece",
  "https://onepunchman.fandom.com/wiki/ONE",
  "https://en.wikipedia.org/wiki/Chess",
];

const authorLink = [
  "https://en.wikipedia.org/wiki/Eiichiro_Oda",
  "https://en.wikipedia.org/wiki/One_(manga_artist)",
  "https://en.wikipedia.org/wiki/Chess",
];

const description = [
  `Follows the adventures of Monkey D. Luffy and his pirate
crew in order to find the greatest treasure ever left by
the legendary Pirate, Gold Roger. The famous mystery
treasure named One Piece.`,
  `It tells the story of Saitama,
  a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after 
  growing bored by a lack of challenge due to his overwhelming strength. 
`,
  `Chess is a board game played between two players. 
  It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi.
   The current form of the game emerged in ...`,
];
const release = [
  "20 October 1999 (Japan)",
  "6 March, 2009 (Japan)",
  "Not Found",
];

function SlideShow() {
  const [reSize, setReSize] = useState(window.innerWidth);
  const [fillDot, setFillDot] = useState(0);
  useEffect(() => {
    //// auto slide /////
    const autoSlide = setInterval(() => {
      setFillDot((pre) => {
        if (pre === 2) return 0;
        return pre + 1;
      });
    }, 5000);

    const handleScroll = () => {
      setReSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScroll);

    ///// get movies /////
    // async function getMove() {
    //   try {
    //     const movies = await axios.get("https://ophim1.com/phim/one-peace");
    //     console.log(movies);
    //   } catch (e) {
    //     alert(e);
    //   }
    // }
    // getMove();
    return () => {
      window.removeEventListener("resize", handleScroll);
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <div className="slider-containner u-margin-bottom-medium">
      <div className="slides">
        <div className="dots">
          {[0, 1, 2].map((dot) => (
            <div
              className="dot"
              onClick={() => setFillDot(dot)}
              style={{
                backgroundColor: dot === fillDot ? "#2568ef" : "transparent",
              }}
              key={dot}
            ></div>
          ))}
        </div>

        {/*//////////////////*/}
        {backGroundImg.map((img, index) => (
          <div
            className="slide__containner"
            style={{ marginLeft: index === 0 ? -fillDot * reSize : "" }}
            key={index}
          >
            <div
              className="slide__bg-img"
              style={{
                backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)) , url(${img})`,
                width: reSize,
              }}
            ></div>
            <div className="containner">
              <div className="containner__heading-slide">
                <div className="containner__slide-inner">
                  <div className="heading-primary">
                    <div className="category">
                      <a href="#">
                        <ion-icon name="list-circle-outline"></ion-icon>
                        Anime
                      </a>
                    </div>
                    <h1 className="u-margin-bottom-small">
                      {nameCommics[index]}
                    </h1>
                    <p className="description u-margin-bottom-small">
                      {description[index]}
                    </p>
                    <div className="author u-flex-gap-medium">
                      <div className="author__name">
                        <a href={`${authorLink[index]}`} className="nav__link">
                          <ion-icon name="pencil-outline"></ion-icon>
                          {nameAuthors[index]}
                        </a>
                      </div>
                      <div className="author__day-publish">
                        <ion-icon name="clipboard-outline"></ion-icon>
                        {release[index]}
                      </div>

                      <div className="author__deeper">
                        <a href={`${readingMore[index]}`} className="nav__link">
                          Reading More
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn btn-slide">
        <div
          className="btn-slide__left"
          onClick={() =>
            setFillDot((pre) => {
              if (pre === 0) return 2;
              return pre - 1;
            })
          }
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>

        <div
          className="btn-slide__right"
          onClick={() =>
            setFillDot((pre) => {
              if (pre === 2) return 0;
              return pre + 1;
            })
          }
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
