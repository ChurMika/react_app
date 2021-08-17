import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App.css'
import Home from '../Home/Home'
import Chat from '../Chats/Chat'
import Profile from '../Profile/Profile'
import News from '../News/News'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />

                <PrivateRoute path="/chats/:chatId" component={Chat} />

                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>

                <Route path="/login" component={Login} />

                <Route path="/news" component={News} />

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}