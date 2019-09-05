import React from 'react';
import './App.css';
import Welcome from './Welcome'

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
        <h1>Welcome to ArtWork 🎨</h1>
        <Welcome artistContainer={this.state.artistContainer}/>
      </div>
    );
  }

}

export default App;
