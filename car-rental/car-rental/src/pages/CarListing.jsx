import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/CarListing/CarItem";
import FindCarForm from "../components/CarListing/FindCarForm";
import Loading from "../components/UI/Loading";
import { AllProducts } from "../FetchingData/Carlist";

const CarListing = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    AllProducts().then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      {loading && (
        <div
          style={{
            justifyContent: "center",
            marginLeft: "45rem",
            marginBottom: "3rem",
          }}
        >
          <Loading />
        </div>
      )}
      {!loading && (
        <div>
          <Row>
            <Col>
              <div className="hero__form">
                <Container>
                  <Row className="form__row">
                    <Col lg="4" md="4">
                      <div className="find__cars-left">
                        <h2>Find your best car here</h2>
                      </div>
                    </Col>
                    <Col lg="8" md="8" sm="12">
                      <FindCarForm setItems={setItems} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
          <section>
            <Container>
              <Row>
                {items[0] &&
                  items.map((item, index) => {
                    return <CarItem item={item} key={item.P_ID} />;
                  })}
              </Row>
            </Container>
          </section>
        </div>
      )}
    </Helmet>
  );
};

export default CarListing;
