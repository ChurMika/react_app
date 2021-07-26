import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'

const Chats = (props) => {
    const [chats, setChats] = React.useState([
        { id: 'id1', name: 'Чат 1' },
        { id: 'id2', name: 'Чат 2' },
        { id: 'id3', name: 'Чат 3' },
    ])

    const [currentChat, setCurrentChat] = React.useState(chats[0])

    const handleChangeChat = (chat) => setCurrentChat(chat)

    return (
        <div className="app app__content app__content_row">
            <List className="app__sidebar">
                {chats.map((chat) => (
                    <Link to={`/chats/${chat.id}`}>
                        <ListItem
                            button
                            key={chat.id}
                            selected={chat.id === currentChat.id}
                            onClick={() => handleChangeChat(chat)}
                        >
                            {chat.name}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )
}

export default Chats


