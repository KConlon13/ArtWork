import React from 'react';
import './App.css';
import Welcome from './Welcome'
import ArtistsContainer from "./ArtistsContainer"

class App extends React.Component {
  state={
    artistContainer: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/artists")
    .then(response=>response.json())
    .then(data => this.setState({
        artistContainer: data
    }))
  }

  render(){
    return (
      <div className="App">
        <h1 className="welcome">ArtWork</h1>
        <hr/>
        <Welcome artistContainer={this.state.artistContainer}/>
      </div>
    );
  }

}

export default App;
