import React, { useEffect, useRef } from "react";
import Swiper, { Autoplay } from "react-id-swiper";
import Slider from "react-slick";

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipe: false,
    touchMove: false,
    swipeToSlide: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
  };

  return (
    <React.Fragment>
      {/* brands slider */}
      <div
        className="swiper-container sw-brand-slider"
        style={{ overflow: "visible" }}
      >
        <Slider {...settings}>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/1.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/2.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/3.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/4.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/5.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/6.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/7.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/8.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/9.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/10.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/11.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/12.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/13.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/14.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/15.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/16.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/17.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/18.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/19.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/20.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/21.png" alt="brand" />
          </div>
          <div className="swiper-slide">
            {/* brand img */}
            <img src="/static/img/brands/22.png" alt="brand" />
          </div>
        </Slider>
      </div>

      {/* brands slider end */}
    </React.Fragment>
  );
};

export default BrandSlider;
