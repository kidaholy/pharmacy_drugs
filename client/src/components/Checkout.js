import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { orderAction } from "../action/orderAction";

export default function Checkout({ amount }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(orderAction(token, amount));
  }
  return (
    <div>
      <StripeCheckout
        amount={amount * 100}
        shippingAddress
        stripeKey="pk_test_51LRDdQI6WesfoGHt2j8VPkNu91qkj0KH0GKsFEfwjcb6Auue60oJbP0VG8bD50jOjlOV7I0cX03TcCW6b6GzYRbr00rVBXhOst"
        token={tokenHandler}
        currency="inr"
      >
        <Button>Pay now</Button>
      </StripeCheckout>
    </div>
  );
}
