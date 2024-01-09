import React from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

export default function Logout() {
  const navigate = useNavigate();
  const func = () => {
    cookie.remove("Type", { path: "/" });
    cookie.remove("token", { path: "/" });
    navigate("/home");
  };
  return (
    <>
      <button>Logout</button>
      {func()}
    </>
  );
}
