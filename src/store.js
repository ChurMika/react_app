import { combineReducers, createStore } from 'redux'
import profileReducer from './components/store/Profile/reducer'
import chatReducer from './components/store/Chat/reducer'
import messageReducer from './components/store/Message/reducer'


const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    message: messageReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)