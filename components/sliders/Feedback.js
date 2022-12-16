import React, { useState, useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
import { getGoogleReviews } from "../../actions/reviews";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Feedback = ({ reviews }) => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   getReviews();
  // }, []);
  // const getReviews = () => {
  //   getGoogleReviews().then((reviews) => {
  //     console.log(reviews.reviews);
  //     setReviews(reviews.reviews);
  //   });
  // };
  const testParams = {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 100,
    },
    speed: 800,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1,
      },
    },
    observer: true,
    observeParents: true,
  };

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const mapReviews = () => {};

  return (
    <React.Fragment>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 sw-as-center mb-30">
            <h4 className="sw-h sw-h-lvl-4 mb-30">What our students say</h4>
          </div>
          <div className="col-lg-6 sw-as-end text-lg-right text-sm-left mb-60">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="sw-btn sw-icon-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn sw-swiper-prev sw-testi-swiper-prev"
            >
              <MdArrowBackIosNew size={20} />
            </button>
            <button
              aria-label="Forward"
              onClick={goNext}
              className="sw-btn sw-icon-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn sw-swiper-next sw-testi-swiper-next"
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div
          className="sw-testimonials-slider mb-4"
          style={{ overflow: "visible" }}
        >
          <Swiper ref={swiperRef} {...testParams}>
            {reviews.reviews.map((review) => {
              return (
                <div className="swiper-slide">
                  <div className="sw-testimonial">
                    <div className="sw-reviewer-frame">
                      <span className="sw-reviewer-img">
                        <img
                          // height="60"
                          // width="80"
                          src={review.profile_photo_url}
                          alt="reviewer"
                        />
                      </span>

                      <div>
                        <h6>{review.author_name}</h6>
                      </div>
                    </div>

                    <div className="sw-testimonial-frame">
                      <div className="mb-10">{review.text}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feedback;
