import React, { useState } from "react";
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
import { Add } from "../FetchingData/Carlist";
import PopUp from "../components/AddCar/PopUp";

function AddCar() {
  const [P_Name, setP_Name] = useState("");
  const [Car_Type, setCar_Type] = useState("");
  const [P_Model, setP_Model] = useState("");
  const [Picture, setPicture] = useState("");
  const [Price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const [Display, setDisplay] = useState("");
  const [Seats, setSeats] = useState("");
  const [descrip, setDescrip] = useState("");
  const [Brand, setBrand] = useState("");
  
  const submit = () => {
    if (P_Model === "" || P_Name === "" || Price === "" || Car_Type === "") {
      setDisplay({
        message: "Incomplete Values entered.",
        heading: "Insertion Failed",
        style: { backgroundColor: "#ff6666" },
        text: { color: "#fff" },
      });
      setError(true);
      return;
    }
    const obj = {
      P_Model: P_Model,
      P_Name: P_Name,
      Price: Price,
      Car_Type: Car_Type,
      Avaliable: "1",
      Picture: Picture,
      Seats: Seats,
      descrip: descrip,
      Brand: Brand,
    };
    console.log(obj);
    Add(obj)
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
      {error && <PopUp Display={Display} setError={setError} />}
      <section style={{ backgroundColor: "#eee" }}>
        <h1 style={{ textAlign: "center" }}>Add Car</h1>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <p className="text-muted mb-1"> </p>
                  <p className="text-muted mb-4">Upload Car Picture</p>
                  <div className="d-flex justify-content-center mb-2">
                    {/* <MDBBtn
                    style={{ backgroundColor: "#000d6b", border: "none" }}
                  > */}
                    <ImagePicker setPicture={setPicture} />
                    {/* </MDBBtn> */}
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
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="form1"
                          onChange={(e) => setP_Name(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Model</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="form1"
                          onChange={(e) => setP_Model(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Brand</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="form1"
                          onChange={(e) => setBrand(e.target.value)}
                        />
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
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Seats</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        id="form1"
                        type="number"
                        onChange={(e) => setSeats(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Type</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="text"
                          onChange={(e) => setCar_Type(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Description</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          id="form1"
                          type="text"
                          onChange={(e) => setDescrip(e.target.value)}
                        />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3"></MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBBtn
                          id="addcar"
                          style={{
                            backgroundColor: "#000d6b",
                            border: "none",
                            marginTop: "2rem",
                            marginLeft: "10rem",
                            display: "none",
                          }}
                          onClick={submit}
                        >
                          Add Car
                        </MDBBtn>
                        <label
                          for="addcar"
                          className="btn"
                          style={{
                            backgroundColor: "#000d6b",
                            color: "#fff",
                            padding: "0.45rem 2.1rem",
                            marginBottom: "0.2rem",
                            marginTop: "2rem",
                            marginLeft: "10rem",
                            borderRadius: "0.4rem 0.4rem 0.4rem 0.4rem",
                            textAlign: "center",
                          }}
                          onClick={submit}
                        >
                          Add Car
                        </label>
                      </MDBCardText>
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
export default AddCar;
