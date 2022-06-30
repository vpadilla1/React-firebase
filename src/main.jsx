import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import 'flowbite';

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='flex h-screen '>
    
  <UserProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </UserProvider>
      </div>
)
