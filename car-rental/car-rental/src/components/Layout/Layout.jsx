import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import context from "./context";
import cookie from "react-cookies";

const Layout = () => {
  const [Authentication, setAuthentication] = useState({
    Type: cookie.load("Type") || "",
    Auth: cookie.load("Type") ? true : false,
  });
  console.log(Authentication.Auth);
  const [navOptions, setNavOptions] = useState(
    !Authentication.Auth
      ? [
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
        ]
      : Authentication.Type === "Vendor"
      ? [
          {
            path: "/sellerDashboard",
            display: "Dashboard",
          },
          {
            path: "/contact",
            display: "Contact Us",
          },
        ]
      : [
          {
            path: "/cars",
            display: "Find Cars",
          },
          {
            path: "/contact",
            display: "Contact Us",
          },
        ]
  );
  return (
    <>
      <context.Provider
        value={{
          Authentication,
          setAuthentication,
          navOptions,
          setNavOptions,
        }}
      >
        <Fragment>
          <Header />
          <div>
            <Routers />
          </div>
          <Footer />
        </Fragment>
      </context.Provider>
    </>
  );
};

export default Layout;
