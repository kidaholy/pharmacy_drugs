import axios from "axios";

export const orderAction = (token, amount) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_REQUEST" });
  const cartItem = getState().addToCartReducers.cartItem;
  const user = getState().userLoginReducers.user;
  const data = { token, amount, cartItem, user };
  try {
    const response = await axios.post("/api/order/placeorder", data);
    dispatch({ type: "ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "ORDER_FAILED" });
    console.log(error);
  }
};

export const allUserOrderAction = (userid) => async (dispatch) => {
  dispatch({ type: "ALL_USER_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/order/user/allorder", { userid });
    console.log(response);
    dispatch({ type: "ALL_USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_USER_ORDER_FAILED", payload: error });
    console.log(error);
  }
};

export const allOrderAction = () => async (dispatch) => {
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/order/allorder");
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAILED", payload: error });
    console.log(error);
  }
};

export const orderUpdateAction = (orderid, item) => async (dispatch) => {
  dispatch({ type: "ORDER_UPDATE_REQUEST" });
  try {
    const response = await axios.post("/api/order/update", { orderid, item });
    alert("Update successfully, Please refresh the page");
    dispatch({ type: "ORDER_UPDATE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ORDER_UPDATE_FAILED", payload: error });
  }
};
