import React from 'react'
import {Link, Route} from "react-router-dom"
import ArtistSpecs from './ArtistSpecs';

class ArtistsCard extends React.Component {


    render(){
        console.log("props", this.props)
        // let spacedName = this.props.obj.username.split(" ").join("_") 
        return(
            <a class="hover">
            <Link to={`/artists/${this.props.obj.id}`}>
            


            <div className="artistContainer" > 
                <div className="ui card"key={this.props.obj.id}>
                <div className="image">
                <img id="profile-img" alt="oh no!" src={this.props.obj.profilePic} />
                </div>
            <div className="content">  
                <div className="header">
                {this.props.obj.username}
                </div>
                <div className="meta text-wrap">
                <small id="smallText">{this.props.obj.bio}</small>
                </div>
            </div>
            <div className="extra content">
                <span>
                <i className="icon home" />
                {this.props.obj.location}
                </span>
                <br/>
                <span>
                <i className="icon paint brush" />
                {this.props.obj.category}
                </span>
            </div>
            </div>
            </div>
            </Link>
            </a>
                  
        )
    }

}

export default ArtistsCard;