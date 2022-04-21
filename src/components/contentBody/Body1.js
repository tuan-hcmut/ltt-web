const titles = [
  "Venom",
  "Rô-bốt biết yêu – WALL-E",
  "Cuộc chiến không trọng lực – Gravity",
  "Biệt đội Big Hero 6 – Big Hero 6",
  "Logan: Người sói – Logan (2017)",
];

const produced = ["2021", "2013", "2014", "2014", "2017"];

const viewCount = ["354556", "687398", "684412", "648871", "374366"];

function Boby1() {
  return (
    <div className="content-new-update u-margin-bottom-medium">
      <div className="containner">
        <div className="content-new-update-inner u-flex-gap-big">
          <div className="content-new-update__img-wrapper">
            <div className="content-new-update__img"></div>
            <div className="content-new-update__img-title">
              <div className="heading-third">
                <h2>Rô-bốt biết yêu – WALL-E</h2>
              </div>
              <div className="author u-flex-gap-medium u-margin-bottom-small">
                <div className="author__day-publish">
                  <ion-icon name="clipboard-outline"></ion-icon>Produced in 2008
                </div>

                <div className="view-count-content">
                  <ion-icon name="eye-outline"></ion-icon>Lượt xem: 452456
                </div>
              </div>

              <div className="description">
                <p>
                  Trong tương lai, trái đất bị bao phủ bởi rác thải; để dọn dẹp,
                  loài người buộc phải rời khỏi trái đất và thay thế vào đó là
                  hàng triệu con rô-bốt nhỏ bé ...
                </p>
              </div>
            </div>
          </div>
          <div className="content-new-update__main">
            <div className="content-new-update__main-heading heading-secondary">
              <h2>New Update</h2>
            </div>
            <div className="content-new-update__main-content">
              {titles.map((title, index) => (
                <div className="content-new-update__main-content-sub">
                  <div className="heading-fourth" key={index}>
                    <a href="/" className="nav__link">
                      {title}
                    </a>
                  </div>
                  <div className="author u-flex-gap-medium u-margin-bottom-small">
                    <div className="author__day-publish">
                      <ion-icon name="clipboard-outline"></ion-icon>Produced in{" "}
                      {produced[index]}
                    </div>

                    <div className="view-count-content">
                      <ion-icon name="eye-outline"></ion-icon>Lượt xem:{" "}
                      {viewCount[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boby1;
