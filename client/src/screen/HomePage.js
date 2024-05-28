import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMedAction } from "../action/medAction";
import Med from "../components/Med";
import SpinnerCircle from "../components/SpinnerCircle";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const med = useSelector((state) => state.allMedReducers);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const admin = localStorage.getItem("user") ? user.isAdmin : false;
  const { loading, medData } = med;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(allMedAction());
    admin === true ? navigate("/admin") : navigate("/");
  }, [dispatch, navigate]);
  return (
    <div className="row justify-content-center">
      {loading && <SpinnerCircle />}
      {medData &&
        medData.map((med) => (
          <div className="col-md-3">
            <Med meds={med} />
          </div>
        ))}
    </div>
  );
}
