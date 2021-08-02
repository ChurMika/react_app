import { ADD_MESSAGE } from './actions'

const initialState = {
    messageList: {}
};

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || []
            return {
                ...state,
                messageList: {
                  ...state.messageList,
                  [action.chatId]: [
                    ...currentList,
                    {
                      ...action.message,
                    },
                  ],
                },
              };
            }
        
        default:
            return state
    }
}