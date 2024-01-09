import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Loading from "../UI/Loading";

function RegisterCustomer() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AccountNumber, setAccountNumber] = useState(0);
  const [Contact, setContact] = useState(0);
  const [loading, setLoading] = useState(false);

  const signUpHandler = () => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: Name,
        Contact: Contact,
        Address: Address,
        Email: Email,
        AccountNo: AccountNumber,
        Password: Password,
      }),
    };
    fetch("http://localhost:8000/signup/C", requestOptions)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          navigate("/login");
        } else {
          console.log("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <MDBInput
        wrapperClass="mb-4"
        label="Name"
        id="form1"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Contact"
        id="form1"
        type="text"
        onChange={(e) => setContact(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Address"
        id="form1"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Accounnt Number"
        id="form1"
        type="text"
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Email"
        id="form1"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form1"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label
        onClick={signUpHandler}
        className="btn signin-btn mb-4 w-100"
        for="signup"
        style={{
          backgroundColor: "#000d6b",
          color: "#fff",
          padding: "0.45rem 4.1rem",
          marginBottom: "0.2rem",
          borderRadius: "0.4rem 0.4rem 0.4rem 0.4rem",
          textAlign: "center",
        }}
      >
        Sign Up
      </label>
      <div style={{ textAlign: "center" }}>{loading && <Loading />}</div>
    </div>
  );
}
export default RegisterCustomer;
