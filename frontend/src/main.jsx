import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChatsContextProvider } from './context/ChatsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChatsContextProvider>
        <App />
    </ChatsContextProvider>
    
  </React.StrictMode>,
)
