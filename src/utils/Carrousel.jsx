import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          {/* <img src={} alt="Imagen 1" className="carousel-image" /> */}
        </div>
        <div>
          {/* <img src={salud} alt="Imagen 2" className="carousel-image" /> */}
        </div>
        <div>
          {/* <img src={sueños} alt="Imagen 3" className="carousel-image" /> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
