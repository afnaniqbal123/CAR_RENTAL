import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

export default function Loading() {
  return (
    <>
      <MDBSpinner grow style={{ width: "3rem", height: "3rem", color:"#000d6b" }}>
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </>
  );
}
