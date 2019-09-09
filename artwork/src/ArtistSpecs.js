import React from 'react'

class ArtistSpecs extends React.Component {

    render(){
        return(
            <div>
            <div class="overlay fixed" style={{position: "sticky", top: "20px", right: "auto", zIndex: "20", float:"right"}}>
                <div class="ui labeled icon vertical menu">
                    <a class="item"><i class="instagram icon"></i> Instagram</a>
                    <a class="item"><i class="facebook icon"></i> Facebook</a>
                    <a class="item"><i class="mail icon"></i> E-mail</a>
                </div>
      </div>
            <div class="artistSpec">
                <h1>{this.props.obj.username}</h1>
                <br/>
                <img  class="profile-specs" alt= "artist's featured piece" src={this.props.obj.profilePic}/>
                <h1>Location: {this.props.obj.location}</h1>
                <h1>Style: {this.props.obj.category}</h1>
                <h1>Rate: ${this.props.obj.rate}</h1>
                <img  class="feature-img" alt= "Artist's featured piece" src={this.props.obj.feature}/>
                <h1>Contact Info: </h1>
                <h3>Phone: {this.props.obj.phone}</h3>
                <h3>Email: {this.props.obj.email}</h3>
                <h3>Website: {this.props.obj.website}</h3> 
                <button className="backButton" onClick={()=>this.props.clickHandler(this.props.obj)}>Back to All Artists</button>
            </div>
            </div>

        )
    
    }

}

export default ArtistSpecs;