import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'


const FriendsList = () => {

    const initalFormValues = {
        id: Date.now(),
        name: '',
        age: '',
        email: '',
    }

    const [friends, setFriends] = useState([])

    const [newFriend, setNewFriend] = useState(initalFormValues)
    

    const addNewFriend = (e) => { 
        e.preventDefault()
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


useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {setFriends(res.data)})
    .catch(err => {console.log(err)})
},[newFriend])

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
            {/* <AddFriend friends = {friends}/> */}
            <h1>Friends List</h1>
            {friends.map(friend => {
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

export default FriendsList