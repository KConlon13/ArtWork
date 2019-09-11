import React from 'react'
import ArtistsCard from './ArtistsCard'
import ArtistSpecs from './ArtistSpecs';
import {Route, Switch} from 'react-router-dom'


class ArtistCollection extends React.Component {
    state = {
        artistsArray: []
    }


        componentDidMount(){
        fetch("http://localhost:3000/artists")
        .then(response=>response.json())
        .then(data => this.setState({artistsArray: data})
        
        )}


render(){
    let artistComponents = this.state.artistsArray.map(artist => <ArtistsCard key={artist.id} obj={artist} />)


    return (
        <div>

{       this.state.artistsArray.length > 0 ? ( <div>
            <Switch>
            <Route path="/artists/:id" render={(routerProps) => {
                            let id = routerProps.match.params.id
                            let artist = this.state.artistsArray.find(artist => artist.id === parseInt(id))
            return <ArtistSpecs obj={artist}/> }}/>


            <Route path="/" render={() => (
                            <div>
                                <>{artistComponents}</>
                            </div>)}/>
            </Switch>
        
        
        </div>
):(<h1>Loading</h1>)}
        </div>
        
        
       

        

    )     
}

}
export default ArtistCollection;