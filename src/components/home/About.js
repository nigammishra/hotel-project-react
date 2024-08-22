import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import { Fade } from "react-awesome-reveal";
import about1 from "../../images/about-1.jpg";
import about2 from "../../images/about-2.jpg";
import about3 from "../../images/about-3.jpg";
import about4 from "../../images/about-4.jpg";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
            <Fade direction="up" delay={100}>
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              </Fade>
              <Fade direction="up" delay={300}>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Hotelier</span>
              </h1>
              </Fade>
              <Fade direction="up" delay={500}>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              </Fade>
              <div className="row g-3 pb-4">
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                <Fade direction="up" delay={700}>
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[0].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[0].count}
                      </h2>
                      <p className="mb-0">{about[0].text}</p>
                    </div>
                  </div>
                  </Fade>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                <Fade direction="up" delay={900}>
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[1].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[1].count}
                      </h2>
                      <p className="mb-0">{about[1].text}</p>
                    </div>
                  </div>
                  </Fade>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                <Fade direction="up" delay={1200}>
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      {about[2].icon}
                      <h2 className="mb-1" data-toggle="counter-up">
                        {about[2].count}
                      </h2>
                      <p className="mb-0">{about[2].text}</p>
                    </div>
                  </div>
                  </Fade>
                </div>
              </div>
              <Fade direction="up" delay={1400}>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
              </Fade>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <Fade direction="up" delay={100}>
                    <img
                      className="img-fluid rounded w-75"
                      src={about1}
                      style={{ marginTop: "25%", borderRadius: "10px" }}
                      alt="about1"
                    />
                  </Fade>
                </div>
                <div className="col-6 text-start">
                  <Fade direction="up" delay={300}>
                    <img
                      className="img-fluid rounded w-100"
                      src={about2}
                      style={{ borderRadius: "10px" }}
                      alt="about2"
                    />
                  </Fade>
                </div>
                <div className="col-6 text-end">
                  <Fade direction="up" delay={500}>
                    <img
                      className="img-fluid rounded w-50"
                      src={about3}
                      style={{ borderRadius: "10px" }}
                      alt="about3"
                    />
                  </Fade>
                </div>
                <div className="col-6 text-start">
                  <Fade direction="up" delay={700}>
                    <img
                      className="img-fluid rounded w-75"
                      src={about4}
                      style={{ borderRadius: "10px" }}
                      alt="about4"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
