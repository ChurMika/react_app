import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter }from 'react-router-dom'
import './index.css'
import Router from './components/router/Router'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>  
    </React.StrictMode>,
    document.getElementById('root')
)
