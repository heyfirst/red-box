require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// === CONFIGULATION ===
const config = require('./config')

const app = server.listen(config.port, (err) => {
  if (err) throw err
  console.log(`> Luxshop - GRAPHQL :: Ready at port ${config.port}.`)
})
// ==========

module.exports = app