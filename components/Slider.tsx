import * as React from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセルに必要なタグをインポート
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper"; //欲しい機能をインポート
import s from "./TestCarousel.module.css"; //同じディレクトリにCSSを用意
import { makeStyles } from "@material-ui/core/styles";
import "swiper/css";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const useStyle = makeStyles({
  slideText: {
    maxWidth: "1200px",
    position: "absolute",
    top: "70%",
    left: "70%",
    transform: "translate(-50%, -50%)",
    color: "#f8f9fa",
    fontSize: "clamp(0.2rem, 2vw, 1.5rem)",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 5px #333",
    fontFamily: "Sawarabi Gothic",
    zIndex: 1,
  },
  slide: {
    height: "auto",
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    margin: "0 auto",
  },
  homeIcon: {
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    fill: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    zIndex: 1,
    "@media (min-width: 0px)": {
      maxWidth: "100px",
    },
    "@media (min-width: 600px)": {
      maxWidth: "200px",
    },
    "@media (min-width: 900px)": {
      maxWidth: "250px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "300px",
    },
  },
});

const Slide: NextPage = () => {
  const Logo =
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Flogo.png?alt=media&token=de505d9e-ebc1-424e-89c1-03b58839c04b";
  const Slides = [
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide1.jpg?alt=media&token=a4e6fe21-1da0-4595-adc7-030edb6f5ed7",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide2.jpg?alt=media&token=30e3f9a4-d591-469b-ab88-34756aca4151",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide3.jpg?alt=media&token=795fe26e-a861-4948-80b0-1a4f2de1f6db",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide4.jpeg?alt=media&token=6b98c1ee-1464-417c-a22f-41c5398f9113",
  ];
  const classes = useStyle();
  return (
    <>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${s.custom_bullet}`, //非アクティブなアイコンのクラスを指定
          bulletActiveClass: `swiper-pagination-bullet-active ${s.custom_bullet_active}`, //アクティブなアイコンのクラスを指定
        }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        speed={500}
        navigation={true}
      >
        {Slides.map((src, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <img
                className={classes.slide}
                src={src}
                // layout="responsive"
                alt="slide images"
              />
              <span>
                <img src={Logo} className={classes.homeIcon} alt="logo" />
              </span>
              <span className={classes.slideText}>
                <h1>
                  竹歯ブラシ
                  <br />
                  KAGUYA
                </h1>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slide;
