import React from 'react'
import ArtistView from "./ArtistView"

class Welcome extends React.Component {

// need to put IDs on artists in API!

    render(){
        let artists = this.props.artistContainer.map(artist=> (
            <ArtistView key={artist.name} obj={artist}/>
        ))

        return (
            <div>
                <h1>Artists:</h1>
                {artists}
            </div>
        )
    }

}

export default Welcome;