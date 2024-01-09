import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { AddContract } from "../../FetchingData/Contracts";
import Popup from "./Popup";
const BookingForm = (props) => {
  const [error, setError] = useState(false);
  const [Display, setDisplay] = useState("");
  const [Start_Date, setStart_Date] = useState("");
  const [End_Date, setEnd_Date] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  const HandleCheckout = async () => {
    if (Start_Date > End_Date) {
      setDisplay({
        message: "Please Select VALID Start date and End Date",
        heading: "Failure",
        style: { backgroundColor: "#ff6666" },
        text: { color: "#fff" },
      });
      setError(true);
      return;
    }
    AddContract({
      pid: props.Car.P_ID,
      vid: props.Car.V_ID,
      sd: Start_Date,
      ed: End_Date,
    })
      .then((res) => {
        console.log(res);
        if (res.data === "Error!! No Start_date and End_Date") {
          setDisplay({
            message: "Please Select Start date and End Date",
            heading: "Failure",
            style: { backgroundColor: "#ff6666" },
            text: { color: "#fff" },
          });
          setError(true);
        } else if (
          res.data === "SORRY !!! Already Booked , Select Another Car"
        ) {
          setDisplay({
            message: "SORRY !!! Already Booked , Select Another Car",
            heading: "Failure",
            style: { backgroundColor: "#ff6666" },
            text: { color: "#fff" },
          });
          setError(true);
        } else if (res.data === "All Done.") {
          setDisplay({
            message: res.data,
            heading: "Success",
            style: { backgroundColor: "#d5ffab" },
            text: { color: "#4b4b4b" },
          });
          setError(true);
        } else {
          setDisplay({
            message: res.data,
            heading: "Failure",
            style: { backgroundColor: "#ff6666" },
            text: { color: "#fff" },
          });
          setError(true);
        }
      })
      .catch((err) => {
        setDisplay({
          message: "Car is Already Reserved",
          heading: "Failure",
          style: { backgroundColor: "#ff6666" },
          text: { color: "#fff" },
        });
        setError(true);
      });
  };

  return (
    <>
      {error && <Popup Display={Display} setError={setError} />}
      <Form onSubmit={SubmitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="date"
            placeholder="Journey Date"
            onChange={(e) => setStart_Date(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="date"
            placeholder="Journey Time"
            className="time__picker"
            onChange={(e) => setEnd_Date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <div className="payment text-end mx-auto">
            <button
              style={{
                backgroundColor: "#000d6b",
                color: "#fff",
                padding: "0.45rem 2.1rem",
                marginBottom: "0.2rem",
                borderRadius: "0.4rem 0.4rem 0.4rem 0.4rem",
                textAlign: "center",
              }}
              onClick={HandleCheckout}
            >
              Reserve Now
            </button>
          </div>
        </FormGroup>
      </Form>
    </>
  );
};

export default BookingForm;
