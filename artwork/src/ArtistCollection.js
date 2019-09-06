import React from 'react'
import ArtistsCard from './ArtistsCard'
import ArtistSpecs from './ArtistSpecs';

class ArtistCollection extends React.Component {
    state = {
        specsToggle: true,
        specsObj: ""
    }


clickHandler = (obj) => {
    this.setState({
        specsToggle: !this.state.specsToggle,
        specsObj: obj 
    })

    }

render(){
    let artistSpecs = <ArtistSpecs key={this.state.specsObj.id} obj={this.state.specsObj} clickHandler={this.clickHandler} /> 
    let artistCard = this.props.artistContainer.map(artist => <ArtistsCard key={artist.id} obj={artist} clickHandler={this.clickHandler} /> )

    return (
        
        <div>
        {this.state.specsToggle ? 
            <div>({artistCard})</div> : <div>({artistSpecs})</div>  
        } 
        </div>
        
        
    )     
}

}
export default ArtistCollection;