import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CustomerProfile from "../pages/CustomerProfile";
import SellerProfile from "../pages/SellerProfile";
import EditCustomer from "../pages/CustomerProfileEdit";
import EditSeller from "../pages/SellerProfileEdit";
import AddCar from "../pages/AddCar";
import SellerDashboard from "../pages/SellerDashboard";
import SellerContracts from "../pages/SellerContracts";
import CustomerContracts from "../pages/CustomerContracts";
import CarEdit from "../pages/CarEdit";
import EditFeedback from "../components/UI/editFeedback";

import context from "../components/Layout/context";
import { useContext } from "react";
import Bookings from "../pages/Bookings";

const Routers = () => {
  const { Authentication } = useContext(context);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/editFeedback" element={<EditFeedback />} />
      <Route
        path="/login"
        element={!Authentication.Auth ? <Login /> : <NotFound />}
      />
      <Route
        path="/cars"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Customer" ? (
            <CarListing />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/cars/:slug"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Customer" ? (
            <CarDetails />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/customerProfile"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Customer" ? (
            <CustomerProfile />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/sellerDashboard"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <SellerDashboard />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/sellerProfile"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <SellerProfile />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/editCustomer"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Customer" ? (
            <EditCustomer />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/customerContracts"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Customer" ? (
            <CustomerContracts />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/Bookings"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <Bookings />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/editSeller"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <EditSeller />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/sellerContracts"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <SellerContracts />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/addcar"
        element={
          !Authentication.Auth ? (
            <Navigate to="/login" />
          ) : Authentication.Type === "Vendor" ? (
            <AddCar />
          ) : (
            <NotFound />
          )
        }
      />
      <Route
        path="/carEdit/:id"
        element={
          !Authentication.Auth ? (
            <Navigate to="login" />
          ) : Authentication.Type === "Vendor" ? (
            <CarEdit />
          ) : (
            <NotFound />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
