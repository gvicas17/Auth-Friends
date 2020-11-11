import React from 'react'
import {Redirect, Route} from 'react-router-dom'

// rest operrator (looks a lot like spread operator)
const PrivateRoute = ({component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token')
    return ( 
        <Route {...rest} render={(props) => {
            if (token) {
                return <Component {...props}/>
            }else{
                return <Redirect to='/login'/>
            }
        }}/>
    )
}

export default PrivateRoute