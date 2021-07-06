import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './components/Login/Login';
import Main from './components/main/main';
import ProtectedRoutes from './Utilities/protectedRoutes';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <ProtectedRoutes exact path='/main' component={Main} name="main" />
          <Route path='/' render={() => (<Redirect to='/login' />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
