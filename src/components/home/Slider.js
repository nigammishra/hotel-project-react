import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../../images/testimonial-1.jpg"
import testimonial2 from "../../images/testimonial-2.jpg"
import testimonial3 from "../../images/testimonial-3.jpg"
import testimonial4 from "../../images/testimonial-4.jpg"

export default function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at a time in the web view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and large devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            <Slider {...settings}>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="testimonial-item position-relative overflow-hidden"
                    style={{ borderRadius: '10px' }}
                  >
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: '#fff' }}>{testimonial[0].description}</p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={testimonial1}
                          style={{ width: "45px", height: "45px", borderRadius: '50%' }}
                          alt="testimonial"
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1" style={{ color: '#fff' }}>{testimonial[0].name}</h6>
                          <small style={{ color: '#fff' }}>{testimonial[0].profession}</small>
                        </div>
                      </div>
                      {testimonial[0].icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="testimonial-item position-relative overflow-hidden"
                    style={{ borderRadius: '10px' }}
                  >
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: '#fff' }}>{testimonial[1].description}</p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={testimonial4}
                          style={{ width: "45px", height: "45px", borderRadius: '50%' }}
                          alt="testimonial"
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1" style={{ color: '#fff' }}>{testimonial[1].name}</h6>
                          <small style={{ color: '#fff' }}>{testimonial[1].profession}</small>
                        </div>
                      </div>
                      {testimonial[1].icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="testimonial-item position-relative overflow-hidden"
                    style={{ borderRadius: '10px' }}
                  >
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: '#fff' }}>{testimonial[2].description}</p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={testimonial2}
                          style={{ width: "45px", height: "45px", borderRadius: '50%' }}
                          alt="testimonial"
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1" style={{ color: '#fff' }}>{testimonial[2].name}</h6>
                          <small style={{ color: '#fff' }}>{testimonial[2].profession}</small>
                        </div>
                      </div>
                      {testimonial[2].icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="testimonial-item position-relative overflow-hidden"
                    style={{ borderRadius: '10px' }}
                  >
                    <div style={{ padding: "20px" }}>
                      <p style={{ color: '#fff' }}>{testimonial[3].description}</p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={testimonial3}
                          style={{ width: "45px", height: "45px", borderRadius: '50%' }}
                          alt="testimonial"
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1" style={{ color: '#fff' }}>{testimonial[3].name}</h6>
                          <small style={{ color: '#fff' }}>{testimonial[3].profession}</small>
                        </div>
                      </div>
                      {testimonial[3].icon}
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
