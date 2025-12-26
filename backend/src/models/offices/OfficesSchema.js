const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const officeSchema = new mongoose.Schema(
  {
    officeId: {
      type: Number,
      required: true,
      unique: true,
    },

    officeName: {
      type: String,
      required: true,
    },

    officeCode: {
      type: String,
      required: true,
      unique: true,
    },

    services: [serviceSchema],

    lastQueueNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Office", officeSchema);
