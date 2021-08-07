import React from 'react'
import Router from './router/Router'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <div className="app">
            <div className="header">
                <Link to="/">Main</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <Router />
        </div>
    )
}

export default App