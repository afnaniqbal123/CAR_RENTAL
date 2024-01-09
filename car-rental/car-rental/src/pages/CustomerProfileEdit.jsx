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
import Confirmation from "../components/UI/confirmation";
import Popup from "../components/ProfileEdit/Popup";
import { ProfileDetails, UpdateDetails } from "../FetchingData/Profile";

function EditCustomer() {
  const [loading, setLoading] = useState(false);
  const [Details, setDetails] = useState({});
  const [Name, setName] = useState("");
  const [Contacts, setContacts] = useState("");
  const [Addresss, setAddresss] = useState("");
  const [error, setError] = useState(false);
  const [Display, setDisplay] = useState("");

  useEffect(() => {
    setLoading(true);
    ProfileDetails().then((res) => setDetails(res.data));
    setLoading(false);
  }, []);

  const UpdateHandler = () => {
    setLoading(true);
    if (Contacts.length != 11 || Name === "" || Addresss === "") {
      setDisplay({
        message: "Incomplete Credidentials entered.",
        heading: "Update Failed",
        style: { backgroundColor: "#ff6666" },
        text: { color: "#fff" },
      });
      setError(true);
      return;
    }
    let obj = {
      Cname: Name !== "" ? Name : Details.Name,
      Contacts: Contacts !== "" ? Contacts : Details.Contacts,
      Addresss: Addresss !== "" ? Addresss : Details.Addresss,
    };
    UpdateDetails(obj)
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
        console.log(res.status);
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
    setLoading(false);
  };
  return (
    <>
      {error && <Popup Display={Display} setError={setError} />}
      <section style={{ backgroundColor: "#eee" }}>
        <h1 style={{ textAlign: "center" }}>Update Profile</h1>
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
                  <p className="text-muted mb-1">{Details.Cname}</p>
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
                      onClick={UpdateHandler}
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
                          placeholder={Details.Cname}
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
                        <strong>{Details.Emails}</strong>
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
                          placeholder={Details.Contacts}
                          id="form1"
                          type="text"
                          onChange={(e) => setContacts(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Account Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <strong>{Details.AccountNo}</strong>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Addresss</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        placeholder={Details.Addresss}
                        id="form1"
                        type="text"
                        onChange={(e) => setAddresss(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
export default EditCustomer;
