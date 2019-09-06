import React from 'react'

class ArtistCard extends React.Component {

    render(){
        console.log(this.props.artist)
        return(
            <div>
                <img  class="profile-img" alt= "artist's featured piece" src={this.props.artist.profilePic}/>
                <h1>Username: {this.props.artist.username}</h1>
                <h1>Location: {this.props.artist.location}</h1>
                <h1>Style: {this.props.artist.category}</h1>
                <h1>Rate: ${this.props.artist.rate}</h1>
                <img  class="feature-img" alt= "artist's featured piece" src={this.props.artist.feature}/>
                <h1>Contact Info: </h1>
                <h3>Phone: {this.props.artist.phone}</h3>
                <h3>Email: {this.props.artist.email}</h3>
                <h3>Website: {this.props.artist.website}</h3> 
                <hr/>
            </div>         
        )
    
    }

}

export default ArtistCard;