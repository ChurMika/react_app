import React from 'react'
import { useParams } from 'react-router'

const Chat = (props) => {
    const { chatId } = useParams() 

    const [chats, setChats] = React.useState([
        { id: 'id1', name: 'Чат 1' },
        { id: 'id2', name: 'Чат 2' },
        { id: 'id3', name: 'Чат 3' },
    ])

    /*for (let i=0; i<=chats.length; i++) {
        if (chatId === chats[i].id) {
            console.log(chatId);
        }
    }*/

    return (
        <div>
            <p>Chat page {chatId}</p>
        </div>
    )
}

export default Chat