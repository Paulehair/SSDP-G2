const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello les puputes!')
})

app.listen(9000, function () {
  console.log('App listening on port 9000!')
})