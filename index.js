const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000


app.get('/', (req, res) => {
   const kelas = {
    id: 1,
    nama : 'Nodejs'
   }
   res.json(kelas)
  })

app.use(express.json())
app.use(userRouter)
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})