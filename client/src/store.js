import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  allUserReducers,
  userLoginReducers,
  userRegisterReducers,
} from "./reducers/userReducers";
import {
  addMedReducers,
  allMedReducers,
  deleteMedReducers,
} from "./reducers/medReducers";
import { addToCartReducers } from "./reducers/cartReducers";
import {
  allOrderReducers,
  allUserOrderReducers,
  orderReducers,
  orderUpdateReducers,
} from "./reducers/orderReducers";

const finalReducers = combineReducers({
  userRegisterReducers: userRegisterReducers,
  userLoginReducers: userLoginReducers,
  allMedReducers: allMedReducers,
  addToCartReducers: addToCartReducers,
  orderReducers: orderReducers,
  allOrderReducers: allOrderReducers,
  allUserReducers: allUserReducers,
  allUserOrderReducers: allUserOrderReducers,
  orderUpdateReducers: orderUpdateReducers,
  deleteMedReducers: deleteMedReducers,
  addMedReducers: addMedReducers,
});

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const cartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const initialState = {
  addToCartReducers: {
    cartItem: cartItem,
  },
  userLoginReducers: {
    user: user,
  },
};

const composeEnchansers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialState,
  composeEnchansers(applyMiddleware(thunk))
);

export default store;
