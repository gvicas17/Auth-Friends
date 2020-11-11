import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
        <Link to = '/login'>Login</Link>
        <Link to = '/friendslist'>Protected</Link>
      <Switch>
          <PrivateRoute exact path = '/friendslist' component = {FriendsList}/>
          <Route path = '/login' component = {Login}/>
          <Route component = {Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
