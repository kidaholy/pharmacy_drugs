import React, { useState } from "react";
import MedDes from "./MedDes";

export default function Med({ meds }) {
  const [modalshow, setModalshow] = useState(false);
  return (
    <>
      <div
        className="m-3 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ height: "300px" }}
        onClick={() => setModalshow(true)}
      >
        <img
          src={meds.imageUrl}
          alt="meds"
          style={{ height: "200px", width: "100%" }}
        />
        <h5>{meds.name}</h5>
      </div>
      <MedDes med={meds} show={modalshow} onHide={() => setModalshow(false)} />
    </>
  );
}
