import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  const { nick = '1234id' } = props

  return (
      <p id={nick}>
          {props.author}: {props.text}
      </p>
  )
}

Message.propTypes = {
  nick: PropTypes.string,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

const AUTHORS = {
  ME: 'Me',
  BOT: 'Bot',
}

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
                    autoFocus
                    className="child__text-field bordered"
                    variant="outlined"
                    label="Сообщение"
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={handleMessageChange}
                />
                <button>Отправить</button>
            </form>
        </div>
    )
}

export default App;
