import * as React from "react";
import Slider from "react-slick";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../img/logo.png";
import { makeStyles } from "@material-ui/core/styles";

// スタイルの設定
const useStyle = makeStyles({
  slideText: {
    position: "absolute",
    top: "70%",
    left: "70%",
    transform: "translate(-50%, -50%)",
    color: "#f8f9fa",
    fontSize: "calc(3px + 2vmin)",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 5px #333",
    fontFamily: "Sawarabi Gothic",
  },
  slide: {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  homeIcon: {
    position: "absolute",
    fill: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    "@media (min-width: 0px)": {
      maxWidth: "130px",
      top: "13%",
      left: "10%",
    },
    "@media (min-width: 601px)": {
      maxWidth: "200px",
      top: "16%",
      left: "10%",
    },
    "@media (min-width: 992px)": {
      maxWidth: "300px",
      top: "20%",
      left: "10%",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "400px",
      top: "40%",
      left: "50%",
      transform: "translate(-110%, -50%)", // 中心基準にする
    },
  },
});

// main
export default function Slide() {
  const classes = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500, //defualt 3000
    arrows: false,
    pauseOnHover: true,
    fade: true, //フェードイン
  };
  const Slides = [slide1, slide2, slide3, slide4];
  return (
    <div>
      <div>
        <Slider {...settings}>
          {Slides.map((slide, index) => (
            <div key={index}>
              <img src={slide} className={classes.slide} alt="写真" />
              <span className={classes.slideText}>
                <h1>
                  竹歯ブラシ
                  <br />
                  KAGUYA
                </h1>
              </span>
            </div>
          ))}
        </Slider>
      </div>
      <img src={Logo} className={classes.homeIcon} alt="logo" />
    </div>
  );
}
