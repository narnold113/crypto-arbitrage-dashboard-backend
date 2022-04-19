require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080

// DB
const db = require('./config/db')
// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Body Parser
app.use(express.urlencoded({ extended: false }))

// Arbitrages Routes
app.use('/api/arbitrages', require('./routes/arbitrages'))

// Orders Routes
app.use('/api/orders', require('./routes/orders'))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})