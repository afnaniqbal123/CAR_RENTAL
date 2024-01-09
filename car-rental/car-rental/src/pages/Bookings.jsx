import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Caritem from "../components/Bookings/Caritem";
import { BookingsV } from "../FetchingData/Contracts";

const Bookings = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    BookingsV().then((res) => {
      console.log(res.data);
      setContracts(res.data);
      setLoading(false);
    });
    // console.log(contracts);
  }, []);

  return (
    <Helmet title="Bookings">
      <CommonSection title="Bookings" />

      <section>
        <Container>
          <Row>
            {contracts[0] &&
              contracts.map((item, index) => (
                <Caritem item={item} key={index} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Bookings;
