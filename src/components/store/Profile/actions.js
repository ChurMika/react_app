export const SHOW_NAME = 'PROFILE::SHOW_NAME'

export const toggleShowName = (name) => ({
    type: SHOW_NAME
})

export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'

export const inputChangeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    }
})