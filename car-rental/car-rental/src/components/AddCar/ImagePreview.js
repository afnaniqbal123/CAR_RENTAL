// App.js
// Kindacode.com
import { useState } from "react";
import { Row, Col, Container } from "reactstrap";

const App = (props) => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      props.setPicture(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>
      <Col>
        <Row>
          {selectedImage && (
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb"
              />
              <button onClick={removeSelectedImage} style={styles.delete}>
                Remove This Image
              </button>
            </div>
          )}
        </Row>
        <Row>
          <Container>
            <input
              id="img"
              accept="image/*"
              type="file"
              onChange={imageChange}
              style={{ display: "none" }}
            />
            <label
              className="btn"
              for="img"
              style={{ backgroundColor: "#000d6b", color: "#fff" }}
            >
              Upload File
            </label>
          </Container>
        </Row>
      </Col>
    </>
  );
};

export default App;

// Just some styles
const styles = {
  // btn:{
  //   border: "1px solid black",
  //   backgroundColor: "yellow"
  // },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    // height: "10rem",
    // width: "15rem",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  delete: {
    marginTop: 5,
    marginBottom: 10,
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
