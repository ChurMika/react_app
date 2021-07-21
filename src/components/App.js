import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useRef, useEffect } from 'react'
import { AUTHORS } from './constants'
import Message from './message'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
      ref.current = value
  }, [value]) 
  return ref.current
}

function App() {
  const [messageList, setMessageList] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    const inputRef = React.useRef(null);

    React.useEffect(()=>{
        inputRef.current.focus();
    }, []);

    React.useEffect(() => {
        if (
            prevMessageList?.length < messageList.length &&
            messageList[messageList.length - 1].author !== AUTHORS.BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Привет' },
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

    const handleMessageChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleMessageSubmit = (e) => {
        e.preventDefault()

        setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.ME, text: inputValue },
        ])
        setInputValue('')
    }

    return (
        <div className="app">
            <div>
                <ul>
                    <li>Chat 1</li>
                    <li>Chat 2</li>
                    <li>Chat 3</li>
                </ul>
            </div>
            <div className="bordered">
                {messageList.map((message, index) => (
                    <Message
                        key={index}
                        text={message.text}
                        author={message.author}
                    />
                ))}
            </div>

            <form className="app__form bordered" onSubmit={handleMessageSubmit}>
                <TextField
                    fullWidth
                    required
                    autoFocus={true}
                    className="child__text-field bordered"
                    variant="outlined"
                    label="Сообщение"
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={handleMessageChange}
                    ref={inputRef}
                />
                <button>Отправить</button>
            </form>
        </div>
    )
}

export default App;