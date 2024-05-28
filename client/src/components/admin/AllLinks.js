import React from "react";

export default function AllLinks() {
  return (
    <div className="row justify-content-center">
      <div>
        <div className="flex-container">
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-primary rounded"
              style={{ height: "100px", color: "white" }}
            >
              <i className="fas fa-user-alt" style={{ fontSize: "48px" }}></i>
              <a
                href="/admin"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>User</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-primary rounded"
              style={{ height: "100px", color: "white" }}
            >
              <i className="fa fa-medkit" style={{ fontSize: "48px" }}></i>
              <a
                href="/admin/medlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Med List</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-primary rounded"
              style={{ height: "100px", color: "white" }}
            >
              <i className="fa fa-medkit" style={{ fontSize: "48px" }}></i>
              <a
                href="/admin/addmed"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Add Med</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-primary rounded"
              style={{ height: "100px", color: "white" }}
            >
              <i className="fa fa-dolly" style={{ fontSize: "48px" }}></i>
              <a
                href="/admin/orderlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Order list</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
