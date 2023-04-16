const express = require('express')
const router = express.Router()
const userData = require('../data/user.json')
const x = 10

router.post('/login',(req, res) => {
  if (userData.username == req.body.username){
    if(userData.password == req.body.password) {
      res.json(userData)
      
    }
    else{
      res.json({ message:"password incorrect"})

    }
  }
  else{
    res.json({ message:'username not found'})
  }
})


module.exports = router