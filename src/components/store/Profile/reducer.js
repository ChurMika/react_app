import { CHANGE_NAME } from './actions'

const initialState = {
    name: 'Marina',
    age: 27
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }            
        default:
            return state
    }
}