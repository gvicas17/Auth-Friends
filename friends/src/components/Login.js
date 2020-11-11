import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const Login = (props) =>{
    const initialState = {
        username: '',
        password: ''
    }

    const [value, setValue] = useState(initialState)
    
    const handleChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value
        })
    } 

    const loginSubmit = (e) => {
        e.preventDefault()
        
        axiosWithAuth()
        .post('/api/login', value)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/friendslist')
        })
        .catch(err => {
            console.log(err)
        })
        setValue({
            username: '',
            password: ''
        })
    }

    return(
        <div>
            <form onSubmit = {loginSubmit}>
                <label>Username:
                    <input
                        name = 'username'
                        type = 'text'
                        value = {value.username}
                        onChange = {handleChange}
                    />
                </label>
                <label>Password:
                    <input 
                        name = 'password'
                        type = 'password'
                        value = {value.password}
                        onChange = {handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login