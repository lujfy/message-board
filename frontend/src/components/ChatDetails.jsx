import React from 'react'
import { useChatsContext } from '../hooks/useChatsContext'


const ChatDetails = ({chat}) => {

  const { dispatch } = useChatsContext()

  const handleClick = async () => {
    const respone = await fetch('/api/' + chat._id , {
      method : 'DELETE'
    })

    const json = await respone.json()

    if(respone.ok) {
      dispatch({type : 'DELETE_CHAT' , payload : json})
    }
  }

  return (
    <div className='chat-details'>

      <h4>{chat.name}</h4>
      <p>{chat.comment}</p>
      <p><strong>{chat.createdAt}</strong></p>

      <span onClick={handleClick}> DELETE </span>
      
    </div>
  )
}

export default ChatDetails
