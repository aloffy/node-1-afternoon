const express = require('express')
const getProducts = require('./getProducts')
const getPerson = require('./getPerson')
const app = express()

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProducts)

// app.get('/api/people', getPerson)

app.listen(4040, console.log('server running port 4040'))