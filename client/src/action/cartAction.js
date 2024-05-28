export const addToCartAction = (item) => (dispatch, getState) => {
  console.log(item);
  dispatch({ type: "ADD_TO_CART", payload: item });
  const cartitem = getState().addToCartReducers.cartItem;
  localStorage.setItem("cartItem", JSON.stringify(cartitem));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartitem = getState().addToCartReducers.cartItem;
  localStorage.setItem("cartItem", JSON.stringify(cartitem));
};
