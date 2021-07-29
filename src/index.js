import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter }from 'react-router-dom'
import './index.css'
import Router from './components/router/Router'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
)
