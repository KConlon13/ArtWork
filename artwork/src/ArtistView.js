import React from 'react'

class ArtistView extends React.Component {

    render(){
        console.log(this.props.obj)
        return(
            <div>
                <h1>Username: {this.props.obj.username}</h1>
                <h1>Location: {this.props.obj.location}</h1>
                <h1>Style: {this.props.obj.category}</h1>
                <h1>Rate: ${this.props.obj.rate}</h1>
                <img  class="feature-img" alt= "artist's featured piece" src={this.props.obj.feature}/>
                <h1>Contact Info: </h1>
                <h3>Phone: {this.props.obj.phone}</h3>
                <h3>Email: {this.props.obj.email}</h3>
                <h3>Website: {this.props.obj.website}</h3> 

            </div>
        )
    }
}

export default ArtistView;