import axios from "axios";
import cookie from "react-cookies";

export const SubmitFeedback = async (obj) => {
  let response = axios({
    method: "post", //put
    url: `http://localhost:8000/feedback/C/${obj.id}`,
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
