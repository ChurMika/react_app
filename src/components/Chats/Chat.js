import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import Input from '../Input/Input'
import { AUTHORS } from '../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/Message/actions'
import { useIsChatExists } from '../../hooks/useIsChatExists'
import { sendMessageToBot } from '../store/Message/actions'
import firebase from 'firebase'

const Chat = (props) => {
    const { chatId } = useParams()

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    const handleMessageSubmit = (newMessageText) => {
        firebase.database().ref('messages').child(chatId).push({
            id: `message${Date.now()}`,
            author: AUTHORS.ME,
            text: newMessageText,
        })

        dispatch(
            sendMessageToBot(chatId, {
                id: `message${Date.now()}`,
                author: AUTHORS.ME,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat