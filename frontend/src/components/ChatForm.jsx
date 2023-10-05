import React, { useState } from 'react'
import { useChatsContext } from '../hooks/useChatsContext'

const ChatForm = () => {
    const { dispatch } = useChatsContext()
    const [name , setName] = useState('')
    const [comment , setComment] = useState('')
    const [error , setError ] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const chat = {name , comment}

        const respone = await fetch('/api' , {
            method : 'POST' ,
            body : JSON.stringify(chat),
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        const json = await respone.json()

        if(!respone.ok) {
            setError(json.error)
            
        }
        if (respone.ok) {
            
            setError(null)
            setName('')
            setComment('')
            console.log('New comment added' , json)
            dispatch({type : 'CREATE_CHAT' , payload : json})
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>

        <h3>Add a new comment</h3>

        <label>User :</label>
        <input
            type='text' 
            onChange={(e) => setName(e.target.value)}
            value={name}
            
        />

        <label>New comment :</label>
        <input
            type='text' 
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            
        />

        <button>Add new</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default ChatForm
