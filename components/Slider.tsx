import * as React from "react";
import type { NextPage } from "next";
import slide1 from "/img/slide1.jpg";
import slide2 from "/img/slide2.jpg";
import slide3 from "/img/slide3.jpg";
import slide4 from "/img/slide4.jpeg";
import Logo from "/img/logo.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセルに必要なタグをインポート
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper"; //欲しい機能をインポート
import s from "./TestCarousel.module.css"; //同じディレクトリにCSSを用意
import { makeStyles } from "@material-ui/core/styles";
import "swiper/css";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const useStyle = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1200px",
  },
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
    display: "flex",
    justifyContent: "center",
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
      maxWidth: "130px",
    },
    "@media (min-width: 600px)": {
      maxWidth: "200px",
    },
    "@media (min-width: 900px)": {
      maxWidth: "200px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "300px",
    },
  },
});

const Slide: NextPage = () => {
  const Slides = [slide1, slide2, slide3, slide4];
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
        className={classes.root}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        speed={500}
        navigation={true}
      >
        {Slides.map((src, index: number) => {
          return (
            <SwiperSlide key={`${index}`} className={classes.slide}>
              <Image
                src={src}
                // layout="responsive"
                width={1200}
                height={675}
                alt="test_image"
              />
              <span className={classes.homeIcon}>
                <Image src={Logo} width={300} height={300} alt="logo" />
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
