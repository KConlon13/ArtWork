import React from 'react'
import ArtistCard from "./ArtistCard"
import Welcome from "./Welcome"

class ArtistsContainer extends React.Component {

    clickHandler = () => {
        // {<ArtistCard artist={this.props.obj}/>} // this is not correct, think we need to create another component above this
    }


    render(){
        return(
            <div className="artistContainer" onClick={() => this.clickHandler()}> 
             
            <div
            className="ui card"
            key={this.props.obj.id}
            >
            <div className="image">
                <img id="profile-img" alt="oh no!" src={this.props.obj.profilePic} />
            </div>
            <div className="content">
                <div className="header">
                {this.props.obj.username}
                </div>
                <div className="meta text-wrap">
                <small>{this.props.obj.bio}</small>
                </div>
            </div>
            <div className="extra content">
                <span>
                <i className="icon home" />
                {this.props.obj.location}
                </span>
                <span>
                <i className="icon paint brush" />
                {this.props.obj.category}
                </span>
            </div>
            </div>
            </div>
            
            // <div onClick={() => console.log("clicked")}>
            //     <img  class="profile-img" alt= "artist's featured piece" src={this.props.obj.profilePic}/>
            //     <h1>Username: {this.props.obj.username}</h1>
            //     <h1>Location: {this.props.obj.location}</h1>
            //     <h1>Style: {this.props.obj.category}</h1>
            //     <img  class="feature-img" alt= "artist's featured piece" src={this.props.obj.feature}/>
            //     <hr/>
            // </div>         
        )
    }

}

export default ArtistsContainer;