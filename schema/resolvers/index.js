// Query
const BookingQuery = require('./booking/Query')

// Mutation
const BookingMutation = require('./booking/Mutation')

module.exports = {
  Query: {
    ...BookingQuery,
  },
  Mutation: {
    ...BookingMutation,
  },
}
