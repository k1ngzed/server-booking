const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    room: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Booking', bookingSchema)
