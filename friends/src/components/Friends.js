import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {AddFriends} from './AddFriends'

class Friends extends React.Component {
 state = {
     friends: []
 }
 componentDidMount() {
     this.getData()
 }
 getData = () => {
     axiosWithAuth()
     .get('/friends')
     .then((res) => {
         console.log(res.data)
        this.setState({
        friends: res.data
        })
     })
     .catch((err) => {
        console.log(err)
    })
 }
 render(){
    return(
        <div>
        <h1>Friends</h1>
        <div>
            {this.state.friends.map((friend)=>(
                <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>
            ))}
        </div>

        <AddFriends state = {this.state.friends}/>
        </div>

    )
 }
}

export default Friends