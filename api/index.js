const express = require('express')
const app = express()
const port = 3002
app.get('/card', (req, res) => {
  res.send('Hello World!')
})
app.get('/',(req,res)=>{
    res.send({database:'Connected !'})
})
app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})