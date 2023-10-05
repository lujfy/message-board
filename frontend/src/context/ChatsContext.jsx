import React, { Children, createContext, useReducer } from 'react'

export const ChatsContext = createContext()

export const ChatsReducer = (state , action) => {
    switch(action.type) {
        case 'SET_CHATS' :
            return {
                chats : action.payload 
            }
        
        case 'CREATE_CHAT' :
            return {
                chats : [action.payload , ...state.chats]  
            }
        
        case 'DELETE_CHAT' :
            return {
                chats : state.chats.filter((chat) => chat._id !== action.payload._id)
            }

        default :
            return state
    }
}

export const ChatsContextProvider = ({ children }) => {

    const [state , dispatch ] = useReducer(ChatsReducer , {
        chats : null
    })
  return (
    <ChatsContext.Provider value={ {...state , dispatch} }>
        { children }
    </ChatsContext.Provider>
  )
}


