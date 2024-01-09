import axios from "axios";

export const C_Login = async (obj) => {
  let res = await axios.post("http://localhost:8000/Login/C", obj);
  return res;
};
export const V_Login = async (obj) => {
  let res = await axios.post("http://localhost:8000/Login/V", obj);
  return res;
};
