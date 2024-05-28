import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AllLinks from "../../components/admin/AllLinks";
import { useDispatch } from "react-redux";
import { addMedAction } from "../../action/medAction";

export default function AddMedPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [price, setPrice] = useState("");
  const [mfd, setMfd] = useState("");
  const [expd, setExpd] = useState("");
  const [no, setNo] = useState("");
  function submitHandler() {
    const medData = {
      name: name,
      imageUrl: imageurl,
      price: price,
      mfdDate: mfd,
      expDate: expd,
      nooftablet: no,
    };
    dispatch(addMedAction(medData));
  }
  return (
    <div>
      <AllLinks />
      <div className="row justify-content-center m-5">
        <h4 className="mb-5">Add Med</h4>
        <div className="col-md-5" style={{ textAlign: "left" }}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              value={imageurl}
              onChange={(e) => setImageurl(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Manufacture Date</Form.Label>
            <Form.Control
              type="text"
              value={mfd}
              onChange={(e) => setMfd(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              value={expd}
              onChange={(e) => setExpd(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>No of Tablet</Form.Label>
            <Form.Control
              type="text"
              value={no}
              onChange={(e) => setNo(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick={submitHandler}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
