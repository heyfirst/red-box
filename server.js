require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const bodyParser = require('body-parser')
const apolloServerExpress = require('apollo-server-express')
const { graphqlExpress, graphiqlExpress } = apolloServerExpress

const server = express()
server.use(cookieParser())
server.use(cors())

// === ROUTES ===
const routes = require('./server/routes')
server.use(routes)

// === GRAPHQL ===
const schema = require('./server/schema')

server.use('/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)
server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// === CONFIGULATION ===
const config = require('./config')

const app = server.listen(config.port, (err) => {
  if (err) throw err
  console.log(`> RED BOX - GRAPHQL :: Ready at port ${config.port}.`)
})
// ==========

module.exports = app
