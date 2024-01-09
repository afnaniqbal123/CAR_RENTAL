import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn
        id="addbtn"
        onClick={toggleShow}
        style={{
          backgroundColor: "#000d6b",
          border: "none",
          marginTop: "2rem",
          marginLeft: "10rem",
          display: "none",
        }}
      >
        Delete
      </MDBBtn>
      <label
        className="btn "
        onClick={toggleShow}
        for="addbtn"
        style={{
          backgroundColor: "#DC3535",
          color: "#fff",
          padding: "0.45rem 4.1rem",
          marginBottom: "0.2rem",
          borderRadius: "0rem 0.25rem 0.25rem 0rem",
        }}
      >
        Delete
      </label>
      {/* <MDBBtn onClick={toggleShow}>Delete</MDBBtn> */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader style={{ backgroundColor: "#ff6666" }}>
              <MDBModalTitle style={{ color: "#fff" }}>Attention</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              All data will be <strong>permanently lost</strong>.<br />
              <strong>Confirm</strong> to proceed.
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn
                id="confirmbtn"
                style={{
                  display: "none",
                  backgroundColor: "#f9a826",
                  border: "none",
                }}
              >
                Confirm
              </MDBBtn>
              <label
                className="btn"
                for="confirmbtn"
                style={{
                  backgroundColor: "#f9a826",
                  color: "#fff",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "0.39rem",
                }}
              >
                Confirm
              </label>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
