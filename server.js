const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(fs.readFileSync("public/index.html").toString('utf8'))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})