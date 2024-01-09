import axios from "axios";
import cookie from "react-cookies";

export const ProfileDetails = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get(
    "http://localhost:8000/customerProfile/details",
    obj
  );
  return response;
};

export const UpdateDetails = async (obj) => {
  let response = axios({
    method: "PUT", //put
    url: "http://localhost:8000/customerProfile/details/",
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

export const VendorProfile = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get("http://localhost:8000/vendor/profile/", obj);
  return response;
};

export const UpdateVendor = async (obj) => {
  console.log(obj);
  let response = axios({
    method: "PUT", //put
    url: "http://localhost:8000/vendor/profile/",
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
