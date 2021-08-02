import { combineReducers, createStore } from 'redux'
import profileReducer from './components/store/Profile/reducer'
import chatReducer from './components/store/Chat/reducer'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)