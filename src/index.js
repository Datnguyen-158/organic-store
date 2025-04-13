import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './componients/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalStyle>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStyle>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
