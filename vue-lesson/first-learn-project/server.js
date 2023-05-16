const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.get('/biba/get401', (req, res) => {
  return res.status(401).send('Unauthorized')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
