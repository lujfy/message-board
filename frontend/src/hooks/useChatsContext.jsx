import React, { useContext } from 'react'
import { ChatsContext } from '../context/ChatsContext'

export const useChatsContext = () => {



    const context = useContext(ChatsContext)

    if(!context) {

        throw Error('useChatsContext must be use inside a ChatsContextProvider')

    }

    return context
}


