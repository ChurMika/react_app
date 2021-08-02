import { ADD_CHAT, DELETE_CHAT } from './actions'

const initialState = {
    chatList: [
        { id: 'id1', nameChat: 'Чат 1' },
        { id: 'id2', nameChat: 'Чат 2' },
        { id: 'id3', nameChat: 'Чат 3' },
    ]
};

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        nameChat: action.payload.name,
                    },
                ],
            };
        case DELETE_CHAT: {
            delete state[action.payload.chatId]
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}