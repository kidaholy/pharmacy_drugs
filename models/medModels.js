const mongoose = require("mongoose");

const medSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  imageUrl: {
    type: String,
    require,
  },
  price: {
    type: Number,
    require,
  },
  nooftablet: {
    type: Number,
    require,
  },
  mfdDate: {
    type: String,
    require,
  },
  expDate: {
    type: String,
    require,
  },
});

const medModels = mongoose.model("medicine", medSchema);
module.exports = medModels;
