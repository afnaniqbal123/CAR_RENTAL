import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItemSeller from "../components/SellerDashboard/CarItemSeller";
import { Link } from "react-router-dom";
import { Vendor_view } from "../FetchingData/Carlist";
import Loading from "../components/UI/Loading";

const CarListing = () => {
  const [loading, setLoading] = useState(false);
  const [Items, setItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    Vendor_view().then((res) => {
      console.log("Items Data:", res.data);
      setItems(res.data);
      setLoading(false);
    });
  }, []);
  

  return (
    <Helmet title="sellerdashboard">
      <CommonSection title="DashBoard" />
      {loading && <Loading />}
      {!loading && (
        <section>
          <Container>
            <h2 style={{ textAlign: "center" }}>
              <strong>My Cars</strong>
            </h2>
            <Col className="mt-5 mb-5 mx-auto" lg="8" md="8" sm="12">
              <Link to="/addcar">
                <button className="btn find__car-btn">Add New Car</button>
              </Link>
            </Col>
            <Row>
              {Items[0] &&
                Items.map((item) => (
                  <CarItemSeller item={item} key={item.P_ID} />
                ))}
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default CarListing;
