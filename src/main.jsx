import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './css/Inicio.css'
import './css/Registrarse.css'
import'./css/pagError.css'
import './css/casa.css'
import './css/sesionAdmin.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)