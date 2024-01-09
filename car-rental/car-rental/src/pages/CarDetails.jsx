import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { ViewOneC } from "../FetchingData/Carlist";
import Loading from "../components/UI/Loading";
import BookingForm from "../components/CarDetails/BookingForm";
import car from "../assets/all-images/cars-img/mercedes-offer.png"

const CarDetails = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [Car, setCar] = useState([]);
  useEffect(() => {
    setLoading(true);
    ViewOneC(slug).then((res) => {
      console.log(res.data);
      setCar(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Helmet title={Car.carName}>
      {loading && <Loading />}
      {!loading && (
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img
                  src={car}
                  alt=""
                  className="w-100"
                  height={"320rem"}
                />
                
              </Col>

              <Col lg="6">
                <div className="car__info">
                  <h2 className="section__title">{Car.P_Name}</h2>

                  <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      Rs{Car.Price}.00 / Day
                    </h6>

                    <span className=" d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      {Car.Rating}
                    </span>
                  </div>

                  <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                    <h1 className="rent__price fs-4">{Car.Name}</h1>
                  </div>
                  <p className="section__description">{Car.Description}</p>

                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "4rem" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-roadster-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {Car.P_Model}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-settings-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {Car.Car_Type}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-timer-flash-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      100
                    </span>
                  </div>

                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "2.8rem" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-map-pin-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {Car.Location}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-wheelchair-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {Car.Seats}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-building-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>
                      {Car.Brand}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm Car={Car} />
              </div>
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default CarDetails;
