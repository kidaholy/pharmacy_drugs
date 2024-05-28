import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Error({ heading, content }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{content}</p>
      </Alert>
    );
  }
}
