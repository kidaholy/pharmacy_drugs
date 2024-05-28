import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllLinks from "../../components/admin/AllLinks";
import { useDispatch, useSelector } from "react-redux";
import { allUserAction } from "../../action/userAction";
import SpinnerCircle from "../../components/SpinnerCircle";

export default function AdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersData = useSelector((state) => state.allUserReducers);
  const { users, loading } = usersData;
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const admin = user.isAdmin;
  useEffect(() => {
    dispatch(allUserAction());
    if (admin === false) navigate("/");
  }, [navigate]);
  return (
    <div>
      <AllLinks />
      <div className="row justify-content-center m-5">
        <h4 className="mb-5">User List</h4>
        {loading && <SpinnerCircle />}
        {users && (
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>User_id</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((person) => {
                return (
                  <tr>
                    <td>{person._id}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
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
