import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App.css'
import App from '../App'
import Chat from '../Chats/Chat'
import Profile from '../store/Profile/Profile'

export default function Router() {
    return (
        <div>
            <div className="bordered">
                <Link to="/">Main</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <Switch>
                <Route path="/" exact component={App} />

                <Route path="/profile" render={() => <Profile />} />

                <Route path="/:chatId" render={() => <Chat />} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}