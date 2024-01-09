import React from "react";
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

export default function Error() {
  return (
    <>
      <MDBModal tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader style={{ backgroundColor: "#ff6666" }}>
              <MDBModalTitle style={{ color: "#fff" }}>Attention</MDBModalTitle>
              <MDBBtn className="btn-close" color="none"></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              All data will be <strong>permanently lost</strong>.<br />
              <strong>Confirm</strong> to proceed.
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary">Close</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
