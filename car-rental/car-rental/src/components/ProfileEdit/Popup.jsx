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
    props.setError(false);
  };

  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>Delete</MDBBtn> */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader style={props.Display.style}>
              <MDBModalTitle style={props.Display.text}>
                {props.Display.heading}
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{props.Display.message}</MDBModalBody>

            <MDBModalFooter>
              <label
                className="btn "
                for="closebtn"
                onClick={toggleShow}
                style={{
                  backgroundColor: "#000d6b",
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
