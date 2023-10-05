import React, { useEffect, useState } from 'react'
import ChatDetails from '../components/ChatDetails'
import ChatForm from '../components/ChatForm'
import { useChatsContext } from '../hooks/useChatsContext'

const Home = () => {

  const {chats , dispatch } = useChatsContext()

  useEffect(() => {
    const fetchChats = async () => {
        const response = await fetch('/api');
        
        const json = await response.json();
        if (response.ok) [
          dispatch({type : 'SET_CHATS' , payload : json})
        ]
    }

    fetchChats()
  } , [])

  return (
    <div className='home'>

      <div className='chats'>
        {chats && chats.map((chat) => (
          <ChatDetails key={chat._id} chat = {chat} />
        ))}
      </div>
      
      <ChatForm />

    </div>
  )
}

export default Home

