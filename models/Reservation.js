const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReservationSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  numOfPeople: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = Reservation = mongoose.model(
  "reservations",
  ReservationSchema
);
