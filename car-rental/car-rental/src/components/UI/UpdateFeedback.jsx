import React from "react";
import {
  Col,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import Rating from "../UI/Rating";

import "../../styles/car-item.css";

const ContractItemCustomer = (props) => {
  const { imgUrl, carName, price, feedback, rating } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            Rs{price}.00 <span>/ Day</span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-user-3-fill"></i> Customer Name
            </span>

            <span className=" d-flex align-items-center gap-1">
              <i class="ri-shield-user-fill"></i> Vendor Name
            </span>
          </div>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-calendar-2-fill"></i> Start Date
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-calendar-check-fill"></i> End Date
            </span>
          </div>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <Rating />
            </span>
            <span className=" d-flex align-items-center gap-1">
              <Button
                id="PopoverLegacy"
                type="button"
                style={{ backgroundColor: "#000d6b" }}
              >
                Gve Feedback
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
                      {/* <Label for="exampleText">Text Area</Label> */}
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                  </Form>
                </PopoverBody>
              </UncontrolledPopover>
            </span>
          </div>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="mx-auto d-flex align-items-center gap-1">
              <Link to="/cars">
                <Button style={{ backgroundColor: "#f9a826" }}>Submit</Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContractItemCustomer;
