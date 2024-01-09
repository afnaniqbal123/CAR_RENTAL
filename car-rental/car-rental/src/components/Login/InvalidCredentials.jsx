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

export default function Invalid(props) {
  const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => {
    setBasicModal(!basicModal);
    props.setloading(false);
    props.seterror(false);
  };

  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>Delete</MDBBtn> */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader style={{ backgroundColor: "#ff6666" }}>
              <MDBModalTitle style={{ color: "#fff" }}>
                Invalid Credentials
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Invalid credentials entered, enter correct credentials.
              <br />
              Or register your account.
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                id="closebtn"
                style={{ display: "none" }}
                color="secondary"
                onClick={toggleShow}
              >
                Close
              </MDBBtn>
              <label
                className="btn "
                for="closebtn"
                onClick={toggleShow}
                style={{
                  backgroundColor: "#f9a826",
                  color: "#fff",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "0.39rem",
                }}
              >
                Close
              </label>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
