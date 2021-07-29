import React from 'react'
import { useParams } from 'react-router'
import { Redirect } from 'react-router'

const Chat = (props) => {
    const { chatId } = useParams() 

    if (!chatId) {
        return <Redirect to="/chats" />
    }

    return (
        <div>
            <p>Chat page {chatId}</p>
        </div>
    )
}

export default Chat