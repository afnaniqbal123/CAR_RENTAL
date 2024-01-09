import axios from "axios";
import cookie from "react-cookies";
export const AllProducts = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get("http://localhost:8000/products/view/C", obj);
  return response;
};

export const Search = async (search) => {
  let response = axios({
    method: "post", //put
    url: "http://localhost:8000/products/search/C/",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      ...search,
      token: cookie.load("token"),
    },
  });
  return response;
};

export const Vendor_view = async () => {
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get("http://localhost:8000/products/view/V", obj);
  return response;
};

export const Add = (obj) => {
  let response = axios({
    method: "post", //put
    url: "http://localhost:8000/products/add/",
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

export const ViewOneV = async (id) => {
  console.log(id);
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get(
    `http://localhost:8000/products/view/V/${id}`,
    obj
  );
  return response;
};
export const ViewOneC = async (id) => {
  console.log(id);
  const obj = {
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
  };
  let response = await axios.get(
    `http://localhost:8000/products/view/C/${id}`,
    obj
  );
  return response;
};

export const Update = (P_ID, Price) => {
  let response = axios({
    method: "PUT", //put
    url: "http://localhost:8000/products/Update",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      P_ID: P_ID,
      Price: Price,
      token: cookie.load("token"),
    },
  });
  return response;
};

export const Delete = (id) => {
  let response = axios({
    method: "DELETE", //put
    url: `http://localhost:8000/products/delete/${id}`,
    headers: {
      "Content-Type": "application/json",
      token: cookie.load("token"),
    },
    data: {
      token: cookie.load("token"),
    },
  });
  return response;
};
