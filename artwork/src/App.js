import React from 'react';
import './App.css';
import Welcome from './Welcome'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import { Route, Switch, Link } from 'react-router-dom'

class App extends React.Component {

  
  render(){
    
    return (
      <div class="App">
        
        <Route path="/" component={Navbar}/>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path= "/" exact component={Welcome}/>

        </Switch>

  </div>
  )}
}

export default App;
