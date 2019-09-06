import React from 'react'
import ArtistCard from "./ArtistCard"
import ArtistsContainer from './ArtistsContainer';

class Welcome extends React.Component {

    render(){

    let artists = this.props.artistContainer.map(artist => <ArtistsContainer key={artist.id} obj={artist} /> )
        return (
            <div class="dfkjgkj" >{artists} </div>
            
 ) 

}}

export default Welcome;