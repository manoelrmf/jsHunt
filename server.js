const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Inicia o app
const app = express()

//Inicia o database

mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

requireDir('./src/models/')

// Cria a primeira rota
app.get('/', (req, res) => {
  res.send("Hello teste")
})

app.listen(3001)