import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App.css'
import App from '../App'
import Chat from '../Chats/Chat'
import Profile from '../Profile/Profile'
import Chats from '../Chats/Chats'

export default function Router() {
    return (
        <div>
            <div className="bordered">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <Switch>
                <Route path="/" exact component={App} />

                <Route exact path="/chats" render={() => <Chats />} />

                <Route path="/chats/:chatId" render={() => <Chat />} />

                <Route path="/profile" render={() => <Profile />} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}