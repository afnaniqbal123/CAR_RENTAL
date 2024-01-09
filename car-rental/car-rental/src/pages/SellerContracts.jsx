import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ContractItem from "../components/SellerContracts/contractItemSeller";
import Loading from "../components/UI/Loading";
import { Vendor_Contracts } from "../FetchingData/Contracts";

const CarListing = () => {
  const [loading, setLoading] = useState(false);
  const [Contracts, setContracts] = useState([]);
  useEffect(() => {
    setLoading(true);
    Vendor_Contracts().then((res) => {
      console.log(res.data);
      setContracts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Helmet title="contract">
      <CommonSection title="Contracts" />
      {loading && <Loading />}
      {Contracts[0] && (
        <section>
          <Container>
            <Row>
              {Contracts.map((item) => (
                <ContractItem item={item} key={item.Contract_ID} />
              ))}
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default CarListing;
