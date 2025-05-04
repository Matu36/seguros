import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nosotros2 from "../assets/images/nosotros2.png";
import salud from "../assets/images/salud.jpeg";
import sueños from "../assets/images/SUEÑOS.jpeg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={nosotros2} alt="Imagen 1" className="carousel-image" />
        </div>
        <div>
          <img src={salud} alt="Imagen 2" className="carousel-image" />
        </div>
        <div>
          <img src={sueños} alt="Imagen 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
