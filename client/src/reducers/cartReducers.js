export const addToCartReducers = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cartItem.find(
        (item) => item.name === action.payload.name
      );
      if (exists) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item.name === action.payload.name ? action.payload : item
          ),
        };
      }
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
        success: true,
        empty: false,
      };
    case "DELETE_FROM_CART": {
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.name !== action.payload.name
        ),
        empty: true,
        success: false,
      };
    }
    default:
      return state;
  }
};
