export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'

export const inputChangeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    }
})