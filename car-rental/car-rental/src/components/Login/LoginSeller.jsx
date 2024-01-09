import React, { useContext, useState } from "react";
import { MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import context from "../Layout/context";
import { useNavigate, Link } from "react-router-dom";
import cookie from "react-cookies";
import Loading from "../UI/Loading";
import { V_Login } from "../../FetchingData/Login";
import Invalid from "./InvalidCredentials";

function LoginSeller() {
  const { setNavOptions, setAuthentication } = useContext(context);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [lodaing, setlodaing] = useState(false);
  const [error, seterror] = useState(false);

  const LoginHandler = () => {
    setlodaing(true);
    V_Login({ Email: Email, Password: Password })
      .then((res) => {
        setlodaing(false);
        if (res.status === 200) {
          setAuthentication({
            Type: "Vendor",
            Auth: true,
          });
          setNavOptions([
            {
              path: "/sellerDashboard",
              display: "DashBoard",
            },
            {
              path: "/contact",
              display: "Contact Us",
            },
          ]);
          cookie.save("Type", "Vendor", { path: "/" });
          cookie.save("token", res.data.token, { path: "/" });
          navigate("/sellerDashboard");
        } else {
          console.log(res);
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
      {error && <Invalid setloading={setlodaing} seterror={seterror} />}
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
        onChange={(obj) => setEmail(obj.target.value)}
        required
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        onChange={(obj) => setPassword(obj.target.value)}
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
      <div style={{ textAlign: "center" }}>{lodaing && <Loading />}</div>
      <p className="text-center">
        Not a member? <Link to="/register"> Sign Up</Link>
      </p>
    </div>
  );
}
export default LoginSeller;
