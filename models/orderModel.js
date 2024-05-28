const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    orderItem: [],
    shippingAddress: {
      type: Object,
      require,
    },
    orderAmount: {
      type: Number,
      require,
    },
    dp: {
      type: String,
    },
    isDelivered: {
      type: String,
      default: "Preparing",
      require,
    },
    transactionId: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
