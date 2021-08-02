import React from 'react'
import { inputChangeName } from "./actions";
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../Input/Input'
import './style.css'



const Profile = (props) => {
    const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)

    const changeName = (newName) => {
        dispatch(inputChangeName(newName))
    }
    
    return (
        <div>
            <h4>Profile</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <Input onSubmit={changeName}/>   
        </div>
    )
}

export default Profile