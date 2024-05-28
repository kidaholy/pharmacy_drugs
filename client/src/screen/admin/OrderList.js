import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allOrderAction, orderUpdateAction } from "../../action/orderAction";
import AllLinks from "../../components/admin/AllLinks";
import SpinnerCircle from "../../components/SpinnerCircle";

export default function OrderList() {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.allOrderReducers);
  const { loading, orders } = orderData;
  useEffect(() => {
    dispatch(allOrderAction());
  }, [dispatch]);
  return (
    <div>
      <AllLinks />
      <div className="row justify-content-center m-5">
        <h4 className="mb-5">Order List</h4>
        {loading && <SpinnerCircle />}
        {orders && (
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Order_id</th>
                <th>Email</th>
                <th>UserId</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Delivered?</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "left" }}>
              {orders.map((o) => {
                return (
                  <tr>
                    <td>{o._id}</td>
                    <td>{o.email}</td>
                    <td>{o.userid}</td>
                    <td>{o.orderAmount}</td>
                    <td>{o.createdAt}</td>
                    <td>
                      {o.isDelivered === "Delivered" ? (
                        <p>Delivered</p>
                      ) : (
                        <i
                          className="fa fa-check"
                          style={{ color: "green" }}
                          onClick={() => {
                            o.isDelivered = "Delivered";
                            dispatch(orderUpdateAction(o._id, o));
                          }}
                        ></i>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}
