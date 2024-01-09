import React, { useState } from "react";
import {
  Col,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import Raating from "../UI/Rating";
import Confirmation from "./Confirmation";
import "../../styles/car-item.css";
import { SubmitFeedback } from "../../FetchingData/Feedback";
import car from "../../assets/all-images/cars-img/mercedes-offer.png"


const ContractItemCustomer = (props) => {
  let {
    Contract_ID,
    Picture,
    P_Name,
    Price,
    Cname,
    Name,
    start_date,
    end_date,
  } = props.item;
  start_date = new Date(start_date);
  end_date = new Date(end_date);
  const [error, setError] = useState(false);
  const [Message, setMessage] = useState("");
  const [rating, setrating] = useState("");
  const [Display, setDisplay] = useState({});
  const Submit = () => {
    console.log(Message);
    console.log(rating);
    SubmitFeedback({ id: Contract_ID, Rating: rating, Message: Message })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setError(true);
          setDisplay({
            message: "Thank You For Your FeedBack.",
            heading: "FeedBack Submittes",
            style: { backgroundColor: "#d5ffab" },
            text: { color: "#4b4b4b" },
          });
          let arr = props.contracts.filter((n, i) => {
            return props.id != i;
          });
          arr = [
            ...arr,
            {
              Contract_ID,
              Picture,
              P_Name,
              Price,
              Cname,
              Name,
              start_date,
              end_date,
              feedback: Message,
              rating: rating,
              num: 1,
            },
          ];
          props.setContracts(arr);
        } else {
          setError(true);
          setDisplay({
            heading: "Failure",
            message: "Feedback has been NOT Submitted.",
            style: { backgroundColor: "#ff6666" },
            text: { color: "#fff" },
          });
        }
      })
      .catch((err) => {
        setError(true);
        setDisplay({
          heading: "Failure",
          message: "Feedback has been NOT Submitted.",
          style: { backgroundColor: "#ff6666" },
          text: { color: "#fff" },
        });
      });
  };
  return (
    <>
      {error && <Confirmation seterror={setError} Display={Display} />}
      <Col lg="4" md="4" sm="6" className="mb-5">
        <div className="car__item">
          <div className="car__img">
            <img src={car} alt="" className="w-100" height={"220rem"} />
          </div>

          <div className="car__item-content mt-4">
            <h4 className="section__title text-center">{P_Name}</h4>
            <h6 className="rent__price text-center mt-">
              Rs{Price}.00 <span>/ Day</span>
            </h6>
            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className=" d-flex align-items-center gap-1">
                <i className="ri-user-3-fill"></i> {Cname}
              </span>

              <span className=" d-flex align-items-center gap-1">
                <i className="ri-shield-user-fill"></i> {Name}
              </span>
            </div>
            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className=" d-flex align-items-center gap-1">
                <i className="ri-calendar-2-fill"></i>
                {start_date.toDateString()}
              </span>
              <span className=" d-flex align-items-center gap-1">
                <i className="ri-calendar-check-fill"></i>
                {end_date.toDateString()}
              </span>
            </div>
            <div className="car__item-info d-flex align-items-center justify-content-between ">
              <span className=" d-flex align-items-center gap-1">
                <Button
                  id="PopoverLegacy"
                  type="button"
                  style={{ backgroundColor: "#000d6b" }}
                  className=" w-30 car__item-btn car__btn-rent"
                >
                  Give Feedback
                </Button>
                <UncontrolledPopover
                  placement="bottom"
                  target="PopoverLegacy"
                  trigger="legacy"
                >
                  <PopoverHeader>Give Feedback</PopoverHeader>
                  <PopoverBody>
                    <Form>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <span className=" d-flex align-items-center gap-1">
                          <Raating setrating={setrating} />
                        </span>
                        <span className="mx-auto d-flex align-items-center gap-1">
                          <Button
                            style={{ backgroundColor: "#f9a826" }}
                            onClick={Submit}
                          >
                            Submit
                          </Button>
                        </span>
                      </FormGroup>
                    </Form>
                  </PopoverBody>
                </UncontrolledPopover>
              </span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ContractItemCustomer;
