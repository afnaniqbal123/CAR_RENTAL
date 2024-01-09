import React, { useContext } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/HamMenu.css";
import { Link, useNavigate } from "react-router-dom";
import context from "../Layout/context";
import cookie from "react-cookies";

function ButtonCustomExample() {
  const { Authentication, setAuthentication, setNavOptions } =
    useContext(context);
  const navigate = useNavigate();

  const logoutHandler = () => {
    cookie.remove("Type", { path: "/" });
    setAuthentication({
      Type: "",
      Auth: false,
    });
    setNavOptions([
      {
        path: "/home",
        display: "Home",
      },
      {
        path: "/contact",
        display: "Contact Us",
      },
      {
        path: "/about",
        display: "About Us",
      },
    ]);
    navigate("/login");
  };

  const customerDropDown = () => {
    return (
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">
          <i class="ri-menu-line"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">
            <Link to="/customerProfile">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link to="/customerContracts">Contracts</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3" onClick={logoutHandler}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  const vendorDropDown = () => {
    return (
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className="super-colors" id="dropdown-custom-1">
          <i class="ri-menu-line"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">
            <Link to="/sellerProfile">Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link to="/sellerContracts">Contracts</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Link to="/Bookings">Bookings</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3" onClick={logoutHandler}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <>
      {Authentication.Type === "Vendor" ? vendorDropDown() : customerDropDown()}
    </>
  );
}

export default ButtonCustomExample;
