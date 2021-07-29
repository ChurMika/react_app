import React from 'react'
import { toggleShowName, inputChangeName } from "./actions";
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../Input/Input'



const Profile = (props) => {
    const dispatch = useDispatch()
    const { showName, name } = useSelector((state) => state.profile)

    const setShowName = (name) => {
        dispatch(toggleShowName(name))
    }

    const changeName = (newName) => {
        dispatch(inputChangeName(newName))
    }
    
    return (
        <div>
            <h4>Profile</h4>
            <span>Name: </span>
            {showName && <div>{name}</div>}
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <Input onSubmit={changeName}/>   
        </div>
    )
}

export default Profile