import React from 'react'
import Message from '../Message/Message'
import Input from '../Input/Input'
import usePrevious from '../../hooks/usePrevious'
import { useSelector } from 'react-redux'

const Chat = (props) => {
    const [messageList, setMessageList] = React.useState([])
    const profileName = useSelector(state => state.profile.name)
    const BOT = 'Bot'

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    React.useEffect(() => {
        if (
            prevMessageList?.length < messageList.length &&
            messageList[messageList.length - 1].author !== BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: BOT, text: 'Привет' },
                    ]),
                1500
            )
        }
    }, [messageList, prevMessageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: profileName, text: newMessageText },
        ])
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="borderedChat">
                    {messageList.map((message, index) => (
                        <Message
                            key={index}
                            text={message.text}
                            author={message.author}
                            render={({ className }) => (
                                <span className={className}>
                                </span>
                            )}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat