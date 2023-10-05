const Chat = require('../models/ChatModels')
const mongoose = require('mongoose')

// get all comments
const getComments =  async(req , res) => {
    const chats = await Chat.find({}).sort({createdAt : -1})
    
    res.status(200).json(chats)
}


// get a single comment
const getOneComment = async(req , res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : "There is no such comment"})
    }

    const chat = await Chat.findById(id)

    if(!chat) {
        return res.status(404).json({ error : "No such workout"})
    }

    res.status(200).json(chat)
}


// create new comment
const createComment = async(req , res) => {

    

    // add doc to db
    const { name , comment} = req.body
    try {
        const chat = await Chat.create({ name , comment})
        res.status(200).json(chat)
        
    }
    catch (error) {
        res.status(400).json({error : error.message})
    }
}


// delete comment
const deleteComment = async (req , res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : "There is no such comment"})
    }

    const chatdelete = await Chat.findByIdAndDelete({_id : id})

    if(!chatdelete) {
        return res.status(404).json({ error : "No such workout"})
    }

    res.status(200).json(chatdelete)


}


// update comment

const UpdateComment = async (req , res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error : "There is no such comment"})
    }

    const chatUpdate = await Chat.findByIdAndUpdate({_id : id} , {
        ...req.body
    })

    if(!chatUpdate) {
        return res.status(404).json({ error : "No such workout"})
    }

    res.status(200).json(chatUpdate)



}



// export

module.exports = {
    getComments ,
    getOneComment ,
    createComment ,
    deleteComment ,
    UpdateComment
}