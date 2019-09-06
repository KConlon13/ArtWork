import React from 'react';
import './App.css';
import Welcome from './Welcome'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <h1 className="welcome">ArtWork</h1>
        <hr/>
        <Welcome />
      </div>
    );
  }

}

export default App;
