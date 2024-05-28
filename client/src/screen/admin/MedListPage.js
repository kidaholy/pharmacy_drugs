import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allMedAction, deleteMedAction } from "../../action/medAction";
import AllLinks from "../../components/admin/AllLinks";
import SpinnerCircle from "../../components/SpinnerCircle";

export default function MedListPage() {
  const dispatch = useDispatch();
  const med = useSelector((state) => state.allMedReducers);
  const { medData, loading } = med;
  useEffect(() => {
    dispatch(allMedAction());
  }, [dispatch]);
  return (
    <div>
      <AllLinks />
      <div className="row justify-content-center m-5">
        <h4 className="mb-5">Med List</h4>
        {loading && <SpinnerCircle />}
        {medData && (
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Med_id</th>
                <th>Name</th>
                <th>Price</th>
                <th>mfdData</th>
                <th>expData</th>
                <th>Delete?</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "left" }}>
              {medData.map((data) => {
                return (
                  <tr>
                    <td>{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.mfdDate}</td>
                    <td>{data.expDate}</td>
                    <td>
                      <i
                        className="fa fa-check"
                        onClick={() => {
                          const id = data._id;
                          dispatch(deleteMedAction(id));
                        }}
                      ></i>
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
