const express = require('express')

const Chat = require("../models/ChatModels")
const { createComment, getComments, getOneComment, deleteComment, UpdateComment } = require('../controllers/ChatController')


const router = express.Router()

router.get('/' , getComments)

router.get('/:id' , getOneComment)

router.post('/' , createComment)

router.delete('/:id' , deleteComment)

router.patch('/:id' , UpdateComment)

module.exports = router