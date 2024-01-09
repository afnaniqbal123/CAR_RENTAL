import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ContractItemCustomer from "../components/CustomerContracts/ContractItemCustomer";
import Feedback from "../components/CustomerContracts/Feedback";
import { Customer_Contracts } from "../FetchingData/Contracts";

const CustomerContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Customer_Contracts().then((res) => {
      console.log(res.data);
      setContracts(res.data);
      setLoading(false);
      console.log(contracts[0].feedback);
    });
    // console.log(contracts);
  }, []);

  return (
    <Helmet title="contract">
      <CommonSection title="Contracts History" />

      <section>
        <Container>
          <Row>
            {contracts[0] &&
              contracts.map((item, index) =>
                item.feedback ? (
                  <ContractItemCustomer item={item} key={index} />
                ) : (
                  <Feedback
                    item={item}
                    key={item.COntract_id}
                    setContracts={setContracts}
                    contracts={contracts}
                    id={index}
                  />
                )
              )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default CustomerContracts;
