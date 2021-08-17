import React from 'react'
import Router from './router/Router'
import { Link } from 'react-router-dom'
import './App.css'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from './store/Profile/actions'

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, [])

    const handleSignOut = (e) => {
        e.preventDefault()

        firebase.auth().signOut()
    }

    return (
        <div className="app">
            <div className="header">
                <Link to="/">Main</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
                <Link to="/login">Login</Link>
                <a href="/" onClick={handleSignOut}>
                    Sign out
                </a>
            </div>

            <Router />
        </div>
    )
}

export default App