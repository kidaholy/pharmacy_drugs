const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LRDdQI6WesfoGHtcY6ITG7KD4lJEnSOb9vUxWF2gNX7Gl7dUs5v3kBL3r2Y7DQWPC13VrS0Kwht2fyGUuIXwq6700BIfbTICG"
);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, amount, user, cartItem } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const order = new Order({
        userid: user._id,
        name: user.username,
        email: user.email,
        orderItem: cartItem,
        orderAmount: amount,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      order.save();
      console.log("order placed");
      res.send("Order placed successfully");
    } else {
      console.log("failed");
      res.send("Payment failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

router.post("/allorder", (req, res) => {
  Order.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return res.status(400).json({ message: error });
    });
});

router.post("/user/allorder", (req, res) => {
  const { userid } = req.body;
  Order.find({ userid })
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      return res.status(404).json({ message: error });
    });
});

router.post("/update", (req, res) => {
  const { orderid, item } = req.body;
  //console.log(item);
  Order.findByIdAndUpdate(orderid, item)
    .then((result) => {
      //console.log(result);
      res.send("Saved Successfully");
    })
    .catch((error) => {
      return res.status(404).json({ message: error });
    });
});

module.exports = router;
