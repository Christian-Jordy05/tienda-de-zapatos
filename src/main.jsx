import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import'./css/pagError.css'
import './css/casa.css'
import './css/Contacto.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)