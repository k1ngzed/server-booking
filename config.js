const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongoatlas-ohqzb.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () =>
  console.log(`Connected to mongo at ${url}`)
)
