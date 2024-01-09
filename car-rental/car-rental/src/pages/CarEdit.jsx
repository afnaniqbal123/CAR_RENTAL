import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagePicker from "../components/AddCar/ImagePreview";
import {
  MDBContainer,
  MDBCard,
  MDBBtn,
  MDBInput,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Update, ViewOneV } from "../FetchingData/Carlist";
import Loading from "../components/UI/Loading";

const AddCar = () => {
  const { id } = useParams();
  const [carDetails, setcarDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Price, setPrice] = useState("");
  useEffect(() => {
    setLoading(true);
    ViewOneV(id).then((res) => {
      setcarDetails(res.data);
      setLoading(false);
    });
  }, []);
  const update = () => {
    Update(id, Price).then((res) => console.log(res));
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <h1 style={{ textAlign: "center" }}>
        <strong>Update Details</strong>
      </h1>
      {loading && <Loading />}
      {!loading && (
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <p className="text-muted mb-1"> </p>

                  <div className="d-flex justify-content-center mb-2">
                    <div className="car__img">
                      <img src={carDetails.Picture} alt="" className="w-100" />
                    </div>
                    <br />
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Car Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {/* <MDBCardText className="text-muted"> */}
                      <MDBCardText>
                        <strong>{carDetails.P_Name}</strong>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Model</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText>
                        <strong>{carDetails.P_Model}</strong>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Rent</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="text"
                          placeholder={carDetails.Price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  {/* <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Feul Average</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBCardText><strong>{carDetails.}</strong></MDBCardText>
                  </MDBCol>
                </MDBRow> */}
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Seats</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText>
                        <strong>5</strong>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Type</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText>
                        <strong>{carDetails.Car_Type}</strong>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3"></MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted mt-3"
                        style={{ marginLeft: "10rem" }}
                      >
                        <label
                          className="btn"
                          for="addbtn"
                          style={{
                            backgroundColor: "#000d6b",
                            color: "#fff",
                            textAlign: "center",
                          }}
                          onClick={update}
                        >
                          Update Car
                        </label>
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
};
export default AddCar;
