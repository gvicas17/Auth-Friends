

import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const AddFriends = () => {
        const [value, setValue] = useState({})
        
        const onChange = (e) => {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        }

        const onSubmit = (e) => {
        // e.preventDefault()
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', value)
        .then((res) => {
        setValue(res.data)
     })
     .catch((err) => {
        console.log(err)
    })
        }
    return(
        <div>
            <form onSubmit = {onSubmit}>
                <h2>Add a Friend</h2>
                <label>Name:
                    <input
                        type = 'text'
                        name = 'name'
                        value = {value.name}
                        onChange = {onChange}
                    />
                </label>
                <label>Age:
                    <input
                        type = 'text'
                        name = 'age'
                        value = {value.age}
                        onChange = {onChange}
                        />
                </label>
                <label>Email:
                    <input
                        type = 'text'
                        name = 'email'
                        value = {value.email}
                        onChange = {onChange}
                    />
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}