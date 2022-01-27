import * as React from 'react';
import Slider from "react-slick";
import slide1 from './img/6_c.jpg';
import slide2 from './img/7_c.jpg';
import slide3 from './img/8_c.jpg';
import slide4 from './img/ocean01.jpeg';
import slideStyle from './slide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from './img/logo.png';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    slideText: {
        position: "absolute",
        top: "70%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        fontSize: "calc(3px + 2vmin)",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0 0 5px #333",
        fontFamily: "Sawarabi Gothic",
    },
});
export default function Slide () {
    const classes = useStyle();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500, //defualt 3000
        arrows: false,
        pauseOnHover: true,
        fade: true,  //フェードイン
    };
    const Slides = [slide1, slide2, slide3, slide4];
    return (
        <div>
            <div >
            <Slider {...settings}>
                {Slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide} alt="slideStyle" />
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
            <img src={Logo} alt="logo" className='homeIcon'/>

        </div>
    );
}