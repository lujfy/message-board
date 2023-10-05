require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const ChatRoutes = require('./routes/chats')

const app = express()

app.use(express.json())



app.use((req , res , next) => {
    console.log(req.path , req.method)
    next()
})

app.use( '/api' ,ChatRoutes)

mongoose.connect(process.env.MONG_URL)
.then(() => {
    // listen request
    app.listen(process.env.PORT , () => {
        console.log("running on port " + process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

