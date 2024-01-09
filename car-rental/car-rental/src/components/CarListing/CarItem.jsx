import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { Model } from "mongoose";
import car from "../../assets/all-images/cars-img/mercedes-offer.png"


const CarItem = (props) => {
  const { Picture, P_Model, P_Name, Name, Price, P_ID, Car_Type, Location } =
    props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={car} alt="" className="w-100 " height={"220rem"} />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{P_Name}</h4>
          <h6 className="rent__price text-center mt-">
            Rs{Price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {Name}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>
              {Location}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line" style={{ color: "#f9a826" }}></i>
              {Car_Type}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {P_Model}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${P_ID}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${P_ID}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
