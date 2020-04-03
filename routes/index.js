const express = require('express') //import express
const router = express.Router()

router.get('/',(req, res) => {
    //res.send('Hello World algo') //sends hello world
    res.render('index')
})

module.exports = router