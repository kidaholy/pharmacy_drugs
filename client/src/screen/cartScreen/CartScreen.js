import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, deleteFromCart } from "../../action/cartAction";
import Checkout from "../../components/Checkout";
import Error from "../../components/Error";
import SpinnerCircle from "../../components/SpinnerCircle";
import Success from "../../components/Success";

export default function CartScreen() {
  const cartState = useSelector((state) => state.addToCartReducers);
  const orderData = useSelector((state) => state.orderReducers);
  const { cartItem, empty } = cartState;
  const { loading, error, success } = orderData;
  var total = cartItem.reduce((x, item) => x + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Med Bag</h2>
          {loading && <SpinnerCircle />}
          {error && (
            <Error
              heading={"Error"}
              content={"Error in Payment!! Try sometimes latter"}
            />
          )}
          {success && (
            <Success
              heading={"Paid Successfully!!"}
              content={
                "Ordered Successfully!! For further details go to MyOrders page"
              }
            />
          )}
          {empty === false && <h6>Your med bag is empty</h6>}
          {cartItem.map((item) => (
            <div className="flex-container m-1">
              <div className="m-1 w-100 ">
                <img
                  src={item.imageUrl}
                  alt="med"
                  style={{ height: "100px", width: "140px" }}
                />
              </div>
              <div className="m-1 w-100 left">
                <h6>{item.name}</h6>
                <h6>
                  Price:{item.price} * {item.quantity} ={" "}
                  {item.price * item.quantity}
                </h6>
                <h6>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    style={{ color: "red" }}
                    onClick={() => {
                      item.quantity = item.quantity - 1;
                      if (item.quantity === 0) {
                        dispatch(deleteFromCart(item));
                      } else {
                        dispatch(
                          addToCartAction(item, item.quantity, item.varient)
                        );
                      }
                    }}
                  ></i>{" "}
                  {item.quantity}{" "}
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    style={{ color: "green" }}
                    onClick={() => {
                      item.quantity = item.quantity + 1;
                      if (item.quantity > 10) {
                        alert("Items can't be added");
                        item.quantity = item.quantity - 1;
                      } else {
                        dispatch(addToCartAction(item));
                      }
                    }}
                  ></i>
                </h6>
                <h6>
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteFromCart(item))}
                  ></i>
                </h6>
                <hr />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="m-3 shadow-lg p-3 mb-5 bg-white rounded">
            <h3>Bill</h3>
            <div className="flex-container ">
              <div className="m-1 w-100 left">
                <h6>Bill Amount:</h6>
                <h6>Shipping Charges:</h6>
                <h6>Tax: (included in each product)</h6>
              </div>
              <div className="m-1 w-100 right">
                <h6>{total}</h6>
                <h6>{total < 200 && total !== 0 ? 10 : 0}</h6>
                <h6>0</h6>
              </div>
            </div>
            <h3>
              Grand Total :{" "}
              {total < 200 ? (total = total + 10) : (total = total + 0)}
            </h3>
            <div className="flex-container">
              <div className="m-1 w-100">
                {localStorage.getItem("user") && !empty ? (
                  <Checkout amount={total} />
                ) : (
                  <Button disabled>Pay Now</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
