import React from 'react';
import Login from './components/Login'
import Friends from './components/Friends'
import {PrivateRoute} from './components/PrivateRoute'

import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div>
        <Link to='/login'>Login</Link>
        <Link to='/friends'></Link>
        </div>
    <Switch>
      <PrivateRoute exact path='/friends' component={Friends}/>
      <Route path='/login' component={Login}/>
      <Route component={Login}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
