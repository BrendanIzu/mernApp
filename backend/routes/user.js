const express = require('express')

const router = express.Router()

router.get('/:id', (req, res) => {
  res.json({
    message: 'GET user profile'
  })
})

module.exports = router