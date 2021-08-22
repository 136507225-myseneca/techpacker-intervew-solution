const express = require('express')
const data = require('./data/templates')

const app = express()

app.get('/api/data', (req, res) => {
  res.json(data)
})

app.get('/api/data/:id', (req, res) => {
  const images = data.find((d) => d.id === req.params.id)
  res.json(images)
})

app.listen(5000, console.log('Server running on port 5000'))
