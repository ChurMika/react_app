import React from 'react'
import { changeName, changeIsOnlineWithThunk } from "../store/Profile/actions";
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import './style.css'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'



const Profile = (props) => {
    const { name, age, isOnline } = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    const handleIsOnlineChange = (event) => {
        dispatch(changeIsOnlineWithThunk(event.target.checked))
    }

    const inputChangeName = (newName) => {
        dispatch(changeName(newName))
    }
    
    return (
        <div>
            <h4>Profile</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <Input onSubmit={inputChangeName}/>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={isOnline}
                        onChange={handleIsOnlineChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Is user online</p>}
            /> 
        </div>
    )
}

export default Profile