import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";
import room1 from "../../images/room-1.jpg";
import room2 from "../../images/room-2.jpg";
import room3 from "../../images/room-3.jpg";
import { Link } from "react-router-dom";
export default function Rooms() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="container project-container-3">
            <div className="row">
              {/* project-item */}
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                 <Link to="/rooms"><img src={room1} alt="project " /></Link> 
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                <Link to="/rooms"><img src={room2} alt="project " /></Link>
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                <Link to="/rooms"><img src={room3} alt="project " /></Link>
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                <Link to="/rooms"><img src={room1} alt="project " /></Link>
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                <Link to="/rooms"><img src={room3} alt="project " /></Link>
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 project-grid-box all appcustomization webdesign">
                <div className="project-single-item-3">
                <Link to="/rooms"><img src={room2} alt="project " /></Link>
                  <small
                    className="position-absolute start-0  translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4"
                    style={{ top: "200px" }}
                  >
                    {roomItems[2].price}
                  </small>
                  <div className="project-img-overlay">
                    <div className="project-content">
                      <div className="info">
                        <div className="p-4 mt-2">
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <h5 className="mb-0">{roomItems[2].name}</h5>
                            <div className="ps-md-2 mt-2 mt-md-0">
                              {roomItems[2].star}
                            </div>
                          </div>
                          <div className="d-flex flex-column flex-md-row mb-3">
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[0].icon}
                              {facility[0].quantity} {facility[0].facility}
                            </small>
                            <small className="border-end me-md-3 pe-md-3 mb-2 mb-md-0">
                              {facility[1].icon}
                              {facility[1].quantity} {facility[1].facility}
                            </small>
                            <small className="border-end pe-md-3">
                              {facility[2].icon}
                              {facility[2].quantity} {facility[2].facility}
                            </small>
                          </div>
                          <p className="text-body mb-3">
                            {roomItems[2].description}
                          </p>
                          <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a
                              className="btn btn-sm btn-primary rounded py-2 px-4 mb-2 mb-md-0"
                              href="/rooms"
                            >
                              {roomItems[2].yellowbtn}
                            </a>
                            <a
                              className="btn btn-sm btn-dark rounded py-2 px-4"
                              href=""
                            >
                              {roomItems[2].darkbtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
