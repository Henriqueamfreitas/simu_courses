import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ResetStyle } from './styles/reset.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <ResetStyle />
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)
