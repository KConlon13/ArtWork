import React from 'react'
import ArtistsCard from './ArtistsCard'
import ArtistSpecs from './ArtistSpecs';


class ArtistCollection extends React.Component {
    state = {
        specsToggle: true,
        specsObj: ""
    }



render(){
    let artistCard = this.props.artistContainer.map(artist => <ArtistsCard key={artist.id} obj={artist}  /> )

    return (
        <div>
        <div class="artistbody">
            <div>{artistCard}</div>
        </div>
        </div>


        

    )     
}

}
export default ArtistCollection;