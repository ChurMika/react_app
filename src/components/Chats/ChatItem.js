import React from 'react'
import Message from '../Message/Message'
import Input from '../Input/Input'
import { AUTHORS } from '../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/Message/actions'
import { useParams } from 'react-router'

const Chat = (props) => {
    const { chatId } = useParams()

    const messages = useSelector(state => state.message.messageList)
    const dispatch = useDispatch()

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            addMessage(chatId, {
                id: `message${chatId}`,
                author: AUTHORS.ME,
                text: newMessageText,
            })
        )
    }

    return (
        <div className="chat">
            {messages.length ? (
                <div className="borderedChat">
                    {messages.map((message) => (
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