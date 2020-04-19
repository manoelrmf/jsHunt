const express = require('express')
const mongoose = require('mongoose')

//Inicia o app
const app = express()

//Inicia o database

mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

require('./src/models/Product')

// Cria a primeira rota
app.get('/', (req, res) => {
  res.send("Hello teste")
})

app.listen(3001)