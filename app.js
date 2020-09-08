const { ApolloServer } = require('apollo-server')

require('./config')

const schema = require('./schema')

// Middleware
const isAuth = require('./middleware/is-auth')

const server = new ApolloServer({
  uploads: {
    maxFileSize: 10000000, // 10 MB
    maxFiles: 10,
  },
  schema,
  context: ({ req }) => {
    return isAuth(req)
  },
  introspection: true,
  playground: true,
})

server.listen(process.env.PORT, (error) => {
  console.info(
    `Serving http://localhost:${process.env.PORT} for ${process.env.NODE_ENV}.`
  )
})
