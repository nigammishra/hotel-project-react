import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Slide, Fade } from "react-awesome-reveal";
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2.jpg";

export default function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="headerCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Auto-slide interval
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src={carousel1}
              alt="Slide 1"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <Slide direction="down">
                  <h6 className="section-title text-white text-uppercase mb-3">
                    Luxury Living
                  </h6>
                </Slide>
                <Fade delay={300}>
                  <h1 className="display-3 text-white mb-4">
                    Discover A Brand Luxurious Hotel
                  </h1>
                </Fade>
                <div className="row">
                  <div className="col-6 text-end">
                    <Slide direction="left" delay={200}>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3"
                      >
                        Our Room
                      </a>
                    </Slide>
                  </div>
                  <div className="col-6 text-start">
                    <Slide direction="right" delay={200}>
                      <a
                        href=""
                        className="btn btn-light py-md-3 px-md-5"
                      >
                        Book Room
                      </a>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="w-100"
              src={carousel2}
              alt="Slide 2"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <Slide direction="down">
                  <h6 className="section-title text-white text-uppercase mb-3">
                    Luxury Living
                  </h6>
                </Slide>
                <Fade delay={300}>
                  <h1 className="display-3 text-white mb-4">
                    Discover A Brand Luxurious Hotel
                  </h1>
                </Fade>
                <div className="row">
                  <div className="col-6 text-end">
                    <Slide direction="left" delay={200}>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3"
                      >
                        Our Room
                      </a>
                    </Slide>
                  </div>
                  <div className="col-6 text-start">
                    <Slide direction="right" delay={200}>
                      <a
                        href=""
                        className="btn btn-light py-md-3 px-md-5"
                      >
                        Book Room
                      </a>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#headerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#headerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
