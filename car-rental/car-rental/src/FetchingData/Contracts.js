import axios from "axios";
import cookie from "react-cookies";

export const Customer_Contracts = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get("http://localhost:8000/contract/view/C/", obj);
  return response;
};

export const Vendor_Contracts = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get("http://localhost:8000/contract/view/V/", obj);
  return response;
};

export const AddContract = async (obj) => {
  let response = await axios({
    method: "post", //put
    url: "http://localhost:8000/contract/add/",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      ...obj,
      token: cookie.load("token"),
    },
  });
  return response;
};

export const BookingsV = async () => {
  let response = await axios({
    method: "post", //put
    url: "http://localhost:8000/contract/bookings/",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      token: cookie.load("token"),
    },
  });
  return response;
};
