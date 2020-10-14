import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
        this.setState({
        friends: res.data
        })
         .catch(err => {
             console.log(err)
         })
     })
 }

 formatData = () => {
     const formattedData = []
     this.state.friends.forEach((name, age, email) => {
         formattedData.push({
             name: name.name,
             age: age.age,
             email: email.email
         })
     })
     return formattedData
 }
 render(){

    const friends = this.formatData()
    return(
        <div>
        <h1>Friends</h1>
        <div>
            {friends.map((friend)=>(
                <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>
            ))}
        </div>
        </div>

    )
 }
}

export default Friends