import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import carData from "../../assets/data/carData";
import ContractItemCustomer from "../UI/UpdateFeedback";

const CarListing = (props) => {
  return (
    <Helmet title="contract">
      <CommonSection title="Contracts" />

      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <ContractItemCustomer item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
	