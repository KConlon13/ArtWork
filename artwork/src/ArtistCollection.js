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

// loginHandler = () => {
//     return <Login />
// }

render(){
    let artistSpecs = <ArtistSpecs key={this.state.specsObj.id} obj={this.state.specsObj} clickHandler={this.clickHandler} /> 
    let artistCard = this.props.artistContainer.map(artist => <ArtistsCard key={artist.id} obj={artist} clickHandler={this.clickHandler} /> )

    return (
        <div>
        {/* <div class="ui menu">
        <div className="item">
        <h1 className="welcome" onClick={()=> (this.setState({specsToggle: true}))}>ArtWork</h1>
        </div>
        <div class="item">
           <div class="ui primary button" onClick={() => console.log("signup")}>Sign up</div>
      </div>
        <div class="item">
           <div class="ui button" onClick={() => console.log("login")}>Log-in</div>
      </div>
      </div> */}
        <div class="artistbody">
        {this.state.specsToggle ? 
            <div>{artistCard}</div> : <div>{artistSpecs}</div>  
        } 
        </div>
  
        </div>

        
        
    )     
}

}
export default ArtistCollection;