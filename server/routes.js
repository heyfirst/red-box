const router = require('express').Router()
const api = require('./utils/api')

router.route('/shots').get(async (req, res) => {
  const data = await api.get('/shots').then(data => data.data)
  res.json(data)
})

module.exports = router
