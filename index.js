require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const ob = {
    "id": "Perales",
    "name": "Jose",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/json', (req, res) => {
    const response = JSON.stringify(ob)
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})