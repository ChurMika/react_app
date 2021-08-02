import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../store/Chat/actions'
import Input from '../Input/Input'

const Home = (props) => {
    const dispatch = useDispatch()
    const chats = useSelector((state) => state.chats.chatList)

    const addNewChat = (name) => {
        dispatch(addChat(name))
    }
    
    const deleteThisChat = (chatId) => {
        dispatch(deleteChat(chatId))
    }

    const [currentChat, setCurrentChat] = React.useState(chats)

    const handleChangeChat = (chat) => setCurrentChat(chat)

    return (
        <div className="app app__content app__content_row">
            <List className="app__sidebar">
                {chats.map((chat) => (
                    <Link to={`/${chat.id}`} key={chat.id}>
                        <ListItem
                            button
                            key={chat.id}
                            selected={chat.id === currentChat.id}
                            onClick={() => handleChangeChat(chat)}
                        >
                            {chat.nameChat}
                        </ListItem>
                        <button onSubmit={deleteThisChat}>Delete Chat</button>
                    </Link>
                ))}
            </List>

            <Input 
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={addNewChat}
            />
                
        </div>
    )
}

export default Home