import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const AddFriend = (props) => {

    const initalFormValues = {
        id: Date.now(),
        name: '',
        age: '',
        email: '',
    }

    const [newFriend, setNewFriend] = useState(initalFormValues)
    

    const addNewFriend = (e) => { 
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
        setNewFriend({
            name:'',
            age:'',
            email:'',
        })
    }

    const handleChange = (e) => {   
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <form onSubmit = {addNewFriend}>
                <label>Name:
                    <input
                        type = 'text'
                        name = 'name'
                        value = {newFriend.name}
                        onChange = {handleChange}
                    />
                </label>
                <label> Age:
                    <input
                        type = 'text'
                        name = 'age'
                        value = {newFriend.age}
                        onChange = {handleChange}
                    />
                </label>
                <label>Email:
                    <input
                        type = 'email'
                        name = 'email'
                        value = {newFriend.email}
                        onChange = {handleChange}
                    />
                </label>
                <button>Add New Friend</button>
            </form>
            <h1>Friends List</h1>
            {props.friends.map(friend => {
                return(
                <div key = {friend.id}>
                <h3>{friend.name}</h3>
                <h6>{friend.age}</h6>
                <h6>{friend.email}</h6>
                </div>
                )
            })}
        </div>
    )
}

export default AddFriend