const express = require('express')
const routes = express.Router()

// Cria a primeira rota
routes.get('/', (req, res) => {
  
  return res.send("Hello teste")
})


module.exports = routes