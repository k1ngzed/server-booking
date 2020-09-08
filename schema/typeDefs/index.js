const { gql } = require('apollo-server')

const typeDefs = gql`
  type Booking {
    _id: ID!
    name: String!
    phone: String!
    email: String
    room: String
    date: String!
    time: String!
    description: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    booking: [Booking]!
  }

  type Mutation {
    createBooking (
      name: String!
      phone: String!
      email: String
      room: String
      date: String!
      time: String!
      description: String
    ): Booking!
  }
`

module.exports = typeDefs
