import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Raating(props) {
  return (
    <FormGroup>
      <Label for="exampleSelect">Rating</Label>
      <Input
        type="select"
        name="select"
        id="exampleSelect"
        onChange={(e) => props.setrating(e.target.value)}
      >
        <option style={{ color: "#f9a826", border: "#f9a826" }} value={1}>
          &#11088;
        </option>
        <option style={{ color: "#f9a826", border: "#f9a826" }} value={2}>
          &#11088; &#11088;
        </option>
        <option style={{ color: "#f9a826", border: "#f9a826" }} value={3}>
          &#11088; &#11088; &#11088;
        </option>
        <option style={{ color: "#f9a826", border: "#f9a826" }} value={4}>
          &#11088; &#11088; &#11088; &#11088;
        </option>
        <option style={{ color: "#f9a826", border: "#f9a826" }} value={5}>
          &#11088; &#11088; &#11088; &#11088; &#11088;
        </option>
      </Input>
    </FormGroup>
  );
}

export default Raating;
