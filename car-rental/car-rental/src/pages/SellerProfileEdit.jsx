import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBInput,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import AlertDanger from "../components/UI/alertDanger";
import Confirmation from "../components/UI/confirmation";
import Popup from "../components/ProfileEdit/Popup";
import { UpdateVendor, VendorProfile } from "../FetchingData/Profile";

function EditSeller() {
  const [alert, setAlert] = React.useState(0);
  const [Details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [Display, setDisplay] = useState("");
  useEffect(() => {
    setLoading(true);
    VendorProfile().then((res) => setDetails(res.data));
    setLoading(false);
  }, []);
  const Update = () => {
    if (Contact.length != 11 || Name === "" || Address === "") {
      setDisplay({
        message: "Incomplete Credidentials entered.",
        heading: "Update Failed",
        style: { backgroundColor: "#ff6666" },
        text: { color: "#fff" },
      });
      setError(true);
      return;
    }
    setLoading(true);
    let obj = {
      Name: Name || Details[0].Name,
      Contact: Contact || Details[0].Contact,
      Address: Address || Details[0].Address,
      Location: Location || Details[0].Location,
    };
    UpdateVendor(obj)
      .then((res) => {
        if (res.status === 200) {
          setDisplay({
            message: "Profile Updated Successfully",
            heading: "Profile Updated",
            style: { backgroundColor: "#d5ffab" },
            text: { color: "#4b4b4b" },
          });
          setError(true);
        }
        console.log(res);
      })
      .catch((err) => {
        setDisplay({
          message: "Incomplete Credidentials entered.",
          heading: "Update Failed",
          style: { backgroundColor: "#ff6666" },
          text: { color: "#fff" },
        });
        setError(true);
      });
  };
  return (
    <>
      {error && <Popup Display={Display} setError={setError} />}
      {alert ? <AlertDanger /> : <></>}
      <section style={{ backgroundColor: "#eee" }}>
        <h1 style={{ textAlign: "center" }}>Update Profile</h1>
        {Details[0] && (
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">{Details[0].Name}</p>
                    <p className="text-muted mb-4">Karachi, Pakistan</p>
                    <div className="d-flex justify-content-center mb-2">
                      <label
                        className="btn"
                        for="updatebtn"
                        style={{
                          backgroundColor: "#000d6b",
                          color: "#fff",
                          padding: "0.45rem 4.1rem",
                          marginBottom: "0.2rem",
                          borderRadius: "0.25rem 0rem 0rem 0.25rem",
                        }}
                        onClick={Update}
                      >
                        Update
                      </label>
                      <br />
                      {/* <Confirmation /> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          <MDBInput
                            id="form1"
                            type="form1"
                            placeholder={Details[0].Name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          <strong>{Details[0].Email}</strong>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          <MDBInput
                            placeholder={Details[0].Contact}
                            id="form1"
                            type="text"
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Account No</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          <strong>(098) 765-4321</strong>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          placeholder={Details[0].Address}
                          id="form1"
                          type="text"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Location</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          <MDBInput
                            placeholder={Details[0].Location}
                            id="form1"
                            type="text"
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )}
      </section>
    </>
  );
}
export default EditSeller;
