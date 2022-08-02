import * as React from "react";
import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセルに必要なタグをインポート
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper"; //欲しい機能をインポート
import style from "../styles/Slide.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Slide: NextPage = () => {
  const Logo =
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Flogo.png?alt=media&token=de505d9e-ebc1-424e-89c1-03b58839c04b";
  const Slides = [
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide1.jpg?alt=media&token=a4e6fe21-1da0-4595-adc7-030edb6f5ed7",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide2.jpg?alt=media&token=30e3f9a4-d591-469b-ab88-34756aca4151",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide3.jpg?alt=media&token=795fe26e-a861-4948-80b0-1a4f2de1f6db",
    "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2Fslide4.jpeg?alt=media&token=6b98c1ee-1464-417c-a22f-41c5398f9113",
  ];
  return (
    <>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${style.custom_bullet}`, //非アクティブなアイコンのクラスを指定
          bulletActiveClass: `swiper-pagination-bullet-active ${style.custom_bullet_active}`, //アクティブなアイコンのクラスを指定
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
                className={style.slide}
                src={src}
                // layout="responsive"
                alt="slide images"
              />
              <span>
                <img src={Logo} className={style.homeIcon} alt="logo" />
              </span>
              <span className={style.slideText}>
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
