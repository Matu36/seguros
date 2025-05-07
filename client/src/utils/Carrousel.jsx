import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fuguito from "../assets/images/fuguito.png";
import FUGOSOLO from "../assets/images/FUGOSOLO.jpg";
import SOLIRECI from "../assets/images/SOLIRECIBIDA.JPG";

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
          <img src={FUGOSOLO} alt="Imagen 2" className="carousel-image" />
        </div>
        <div>
          <img src={fuguito} alt="Imagen 1" className="carousel-image" />
        </div>

        <div>
          <img src={SOLIRECI} alt="Imagen 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
