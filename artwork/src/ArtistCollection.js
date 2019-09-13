import React from 'react'
import ArtistsCard from './ArtistsCard'
import ArtistSpecs from './ArtistSpecs';
import {Route, Switch} from 'react-router-dom'
import SearchForm from "./SearchForm"


class ArtistCollection extends React.Component {
    state = {
        artistsArray: [],
        searchTerm: "",
        newArtists: []
        
    }


        componentDidMount(){
        fetch("http://localhost:3000/artists")
        .then(response=>response.json())
        .then(data => this.setState({artistsArray: data})
        
        )}


        changeHandler = (searchterm) => {
        
            this.setState({searchTerm: searchterm})
            // console.log("search", searchterm)
            // console.log("artists", newArtists)
        } 

        filterArtists = () =>{
            return this.state.artistsArray.filter(artist => artist.category.includes(this.state.searchTerm))
        }


render(){

    

    // newArtists = this.state.artistsArray.filter(artist => artist.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // console.log(thnewArtists)
    let artistComponents = this.filterArtists().map(artist => <ArtistsCard key={artist.id} obj={artist} />)
    console.log("artist", this.state.newArtists)



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
                                <SearchForm changeHandler={this.changeHandler}/>
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