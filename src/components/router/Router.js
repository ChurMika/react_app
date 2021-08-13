import React from 'react'
import { Switch, Route } from 'react-router'
import '../App.css'
import Home from '../Home/Home'
import Chat from '../Chats/Chat'
import Profile from '../Profile/Profile'
import News from '../News/News'

export default function Router() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/chats/:chatId" component={Chat} />

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/news" component={News} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}