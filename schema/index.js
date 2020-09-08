const { makeExecutableSchema } = require('apollo-server')

const resolvers = require('./resolvers')
// Schema
const typeDefs = require('./typeDefs')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
