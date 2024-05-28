import axios from "axios";

export const allMedAction = () => async (dispatch) => {
  dispatch({ type: "ALL_MED_REQUEST" });
  try {
    const response = await axios.get("/api/med/allmed");
    //console.log(response);
    dispatch({ type: "ALL_MED_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_MED_FAILED", payload: error });
  }
};

export const deleteMedAction = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_MED_REQUEST" });
  try {
    const response = await axios.post("/api/med/deletemed", { id });
    alert("Deleted successfully, Please Refresh the page");
    dispatch({ type: "DELETE_MED_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "DELETE_MED_FAILED", payload: error });
  }
};

export const addMedAction = (item) => async (dispatch) => {
  dispatch({ type: "ADD_MED_REQUEST" });
  try {
    const response = await axios.post("/api/med/addmed", { item });
    alert("Saved Successfully");
    console.log(response);
    dispatch({ type: "ADD_MED_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_MED_FAILED", payload: error });
  }
};
