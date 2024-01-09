import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { ProfileDetails } from "../FetchingData/Profile";
import Loading from "../components/UI/Loading";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [Details, setDetails] = useState({});
  useEffect(() => {
    setLoading(true);
    ProfileDetails().then((res) => setDetails(res.data));
    setLoading(false);
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      {loading && <Loading />}
      {!loading && (
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
                    <Link to="/editCustomer">
                      <MDBBtn
                        id="updatebtn"
                        style={{
                          backgroundColor: "#000d6b",
                          color: "#fff",
                          padding: "0.45rem 4.1rem",
                          marginBottom: "0.2rem",
                          borderRadius: "0rem 0.25rem 0.25rem 0rem",
                          display: "none",
                        }}
                      >
                        Edit Profile
                      </MDBBtn>
                      <label
                        className="btn"
                        for="updatebtn"
                        style={{
                          backgroundColor: "#000d6b",
                          color: "#fff",
                          padding: "0.45rem 4.1rem",
                          marginBottom: "0.2rem",
                          borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                        }}
                      >
                        Edit Profile
                      </label>
                    </Link>
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
                        {Details.Cname}
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
                        {Details.Emails}
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
                        {Details.Contacts}
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
                        {Details.AccountNo}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {Details.Addresss}
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
  );
}
