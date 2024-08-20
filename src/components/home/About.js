import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import about1 from "../../images/about-1.jpg"
import about2 from "../../images/about-2.jpg"
import about3 from "../../images/about-3.jpg"
import about4 from "../../images/about-4.jpg"

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Hotelier</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-3 pb-4">
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[0].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[0].count}
                      </h2>
                      <p className="mb-0">{about[0].text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[1].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[1].count}
                      </h2>
                      <p className="mb-0">{about[1].text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[2].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[2].count}
                      </h2>
                      <p className="mb-0">{about[2].text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={about1}
                    style={{ marginTop: "25%", borderRadius:'10px' }}
                    alt="about1"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={about2}
                    style={{  borderRadius:'10px' }}
                    alt="about2"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={about3}
                    style={{  borderRadius:'10px' }}
                    alt="about3"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={about4}
                    style={{  borderRadius:'10px' }}
                    alt="about4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
