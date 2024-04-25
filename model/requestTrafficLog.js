const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestTrafficLogs = new Schema({
  path: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("RequestTrafficLogs", requestTrafficLogs);
