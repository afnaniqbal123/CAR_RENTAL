import React, { useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Search } from "../../FetchingData/Carlist";

const FindCarForm = ({ setItems }) => {
  const [Price, setPrice] = useState("");
  const [Location, setLocation] = useState("");
  const [Car_type, setCar_type] = useState("");
  const search = (event) => {
    event.preventDefault();
    Search({ Price: Price, Location: Location, Car_Type: Car_type })
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form className="form" onSubmit={search}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Car Type"
            onChange={(e) => setCar_type(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="form__group" style={{ marginLeft: "18rem" }}>
          <button className="btn find__car-btn" onClick={search}>
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
