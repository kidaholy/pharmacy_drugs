import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../action/cartAction";

export default function MedDes(props) {
  const dispatch = useDispatch();
  function addToCartHandler() {
    props.med.quantity = 1;
    dispatch(addToCartAction(props.med));
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{props.med.name}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={9} md={6}>
              <img
                src={props.med.imageUrl}
                className="img-fluid"
                style={{ heigth: "350px", width: "400px" }}
                alt="meddes"
              />
            </Col>
            <Col xs={9} md={6}>
              <h6>
                <b>Price : Rs.</b>
                {props.med.price}
              </h6>
              <h6>
                <b>Manufacture Date :</b>
                {props.med.mfdDate}
              </h6>
              <h6>
                <b>Expiry Date :</b>
                {props.med.expDate}
              </h6>
              <h6>
                <b>Quantity :</b>
                {props.med.nooftablet}
              </h6>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => addToCartHandler()}>Add to Bag</Button>
      </Modal.Footer>
    </Modal>
  );
}
