import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";
import room1 from "../../images/room-1.jpg"
import room2 from "../../images/room-2.jpg"
import room3 from "../../images/room-3.jpg"
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
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={room1} alt="img" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {roomItems[0].price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{roomItems[0].name}</h5>
                    <div className="ps-2">{roomItems[0].star}</div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      {facility[0].icon}
                      {facility[0].quantity} {facility[0].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[1].icon}
                      {facility[1].quantity} {facility[1].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[2].icon}
                      {facility[2].quantity} {facility[2].facility}
                    </small>
                  </div>
                  <p className="text-body mb-3">{roomItems[0].description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-sm btn-primary rounded py-2 px-4"
                      href=""
                    >
                      {roomItems[0].yellowbtn}
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                      {roomItems[0].darkbtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={room2} alt="img" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {roomItems[1].price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{roomItems[1].name}</h5>
                    <div className="ps-2">{roomItems[1].star}</div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      {facility[0].icon}
                      {facility[0].quantity} {facility[0].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[1].icon}
                      {facility[1].quantity} {facility[1].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[2].icon}
                      {facility[2].quantity} {facility[2].facility}
                    </small>
                  </div>
                  <p className="text-body mb-3">{roomItems[1].description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-sm btn-primary rounded py-2 px-4"
                      href=""
                    >
                      {roomItems[1].yellowbtn}
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                      {roomItems[1].darkbtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={room3} alt="img" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {roomItems[2].price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{roomItems[2].name}</h5>
                    <div className="ps-2">{roomItems[2].star}</div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      {facility[0].icon}
                      {facility[0].quantity} {facility[0].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[1].icon}
                      {facility[1].quantity} {facility[1].facility}
                    </small>
                    <small className="border-end me-3 pe-3">
                      {facility[2].icon}
                      {facility[2].quantity} {facility[2].facility}
                    </small>
                  </div>
                  <p className="text-body mb-3">{roomItems[2].description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-sm btn-primary rounded py-2 px-4"
                      href=""
                    >
                      {roomItems[2].yellowbtn}
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                      {roomItems[2].darkbtn}
                    </a>
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
