import React, { useState, useContext } from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";
import context from "../Layout/context";
import cookie from "react-cookies";
import Loading from "../UI/Loading";
import { C_Login } from "../../FetchingData/Login";
import Invalid from "../../components/Login/InvalidCredentials";
function LoginCustomer() {
  const { setNavOptions, setAuthentication } = useContext(context);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [lodaing, setlodaing] = useState(false);
  const [error, seterror] = useState(false);

  const LoginHandler = () => {
    setlodaing(true);
    C_Login({ Email: Email, Password: Password })
      .then((res) => {
        setlodaing(false);
        if (res.status === 200) {
          console.log(res);
          setAuthentication({
            Type: "Customer",
            Auth: true,
          });
          setNavOptions([
            {
              path: "/cars",
              display: "Find Cars",
            },
            {
              path: "/contact",
              display: "Contact Us",
            },
          ]);
          cookie.save("Type", "Customer", { path: "/" });
          cookie.save("token", res.data.token, { path: "/" });
          navigate("/cars");
        } else {
          seterror(true);
        }
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  };
  return (
    <div>
      {error && (
        <Invalid setloading={setlodaing} seterror={seterror}/>
      )}
      <MDBInput
        label="Email address"
        wrapperClass="mb-4"
        id="form1"
        type="email"
        onChange={(object) => setEmail(object.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        onChange={(object) => setPassword(object.target.value)}
      />

      <div className="d-flex justify-content-between mx-4 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="!#">Forgot password?</a>
      </div>
      <label
        onClick={LoginHandler}
        className="btn signin-btn mb-4 w-100"
        for="signin"
        style={{
          backgroundColor: "#000d6b",
          color: "#fff",
          padding: "0.45rem 4.1rem",
          marginBottom: "0.2rem",
          borderRadius: "0.4rem 0.4rem 0.4rem 0.4rem",
          textAlign: "center",
        }}
      >
        Sign In
      </label>
      <div style={{ textAlign: "center" }}>
        {lodaing && <Loading seterror={seterror} />}
      </div>
      <p className="text-center">
        Not a member? <Link to="/register"> Sign Up</Link>
      </p>
    </div>
  );
}
export default LoginCustomer;
