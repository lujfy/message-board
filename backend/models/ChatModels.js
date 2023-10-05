const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ChatsSchema = new Schema({
    name : {
        type : String ,
        required :  true
    } 
    ,

    comment : {
        type : String ,
        required :  true
    }
} , {timestamps : true})

module.exports = mongoose.model('Chat' , ChatsSchema)