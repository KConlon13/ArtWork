import React from 'react';
import './App.css';
import Welcome from './Welcome'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import ArtistSpecs from "./ArtistSpecs"
import { Route, Switch, Link } from 'react-router-dom'

class App extends React.Component {
state={
  user_id: null
}
  
loginHandler=(obj)=> {
  this.setState({
    user_id: obj
  })
}

  render(){
    console.log('CURRENT USER', this.state.user_id, localStorage)
    return (
      <div class="App">
        <Navbar user_id={this.state.user_id} loginHandler={this.loginHandler}/>
        <Switch>
        <Route path="/login" render={

          () => <Login loginHandler={this.loginHandler} user_id={this.state.user_id}/>}
          />
        <Route path="/Signup" component={Signup}/>
        <Route path= "/"  component={Welcome}/>
        {/* <Route path="/artists/:name" component={ArtistSpecs}/> */}

        </Switch>

  </div>
  )}
}

export default App;
