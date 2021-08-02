import React from 'react'
import { useParams } from 'react-router'
import { Redirect } from 'react-router'
import ChatItem from './ChatItem'
import { useSelector } from 'react-redux'

const Chat = (props) => {
    const chats = useSelector((state) => state.chats.chatList)
    
    const { chatId } = useParams() 

    const [currentChat] = React.useState(chats[0])

    if (!chatId) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <p>Chat page {chatId}</p>

            <div className="app__main">
                <ChatItem id={currentChat.id} />
            </div>
        </div>
    )
}

export default Chat