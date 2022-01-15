import * as React from 'react';
import Slider from "react-slick";
import slide1 from './img/6_c.jpg';
import slide2 from './img/7_c.jpg';
import slide3 from './img/8_c.jpg';
import slide4 from './img/ocean01.jpeg';
import slide from './slide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from './logo.png';

export default function Slide () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500, //defualt 3000
        arrows: false,
        // ここから下はいらんかも
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const Slides = [slide1, slide2, slide3, slide4];
    return (
        <div>
            <div >
            <Slider {...settings}>
                {Slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide} alt="slide" />
                    </div>
                ))}
            </Slider>
            </div>
            <img src={Logo} alt="logo" className='homeIcon'/>

        </div>
    );
}