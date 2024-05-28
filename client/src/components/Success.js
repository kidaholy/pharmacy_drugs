import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function Success({ heading, content }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Alert show={show} variant="success">
        <Alert.Heading>{heading} &#128519;</Alert.Heading>
        <p>{content}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </div>
  );
}
