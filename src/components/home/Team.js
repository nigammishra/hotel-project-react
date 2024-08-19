import React from "react";
import { socialIcons, team } from "../data/Data";
import { Link } from "react-router-dom";
import CommonHeading from "../common/CommonHeading";
import team1 from "../../images/team-1.jpg"
import team2 from "../../images/team-2.jpg"
import team3 from "../../images/team-3.jpg"
import team4 from "../../images/team-4.jpg"

export default function Teams() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Staffs"
          />
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={0}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team1} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[0].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[1].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[2].icon}
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[0].name}</h5>
                  <small>{team[0].designation}</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={1}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team2} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[0].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[1].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[2].icon}
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[1].name}</h5>
                  <small>{team[1].designation}</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={2}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team3} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[0].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[1].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[2].icon}
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[2].name}</h5>
                  <small>{team[2].designation}</small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={3}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team4} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[0].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[1].icon}
                    </a>
                    <a
                      className="btn btn-square btn-primary mx-1"
                      href=""
                    >
                      {socialIcons[2].icon}
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[3].name}</h5>
                  <small>{team[3].designation}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
