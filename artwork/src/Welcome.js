import React from 'react'
import ArtistCollection from './ArtistCollection'

class Welcome extends React.Component {
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
            <ArtistCollection artistContainer={this.state.artistContainer}/>
        )


}}

export default Welcome;