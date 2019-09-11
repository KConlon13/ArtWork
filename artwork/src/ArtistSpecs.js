import React from 'react'
class ArtistSpecs extends React.Component {
    render(){
        return(
            <div>
            <div class="overlay fixed" style={{position: "sticky", top: "20px", right: "auto", zIndex: "20", float:"right"}}>
                <div class="ui labeled icon vertical menu">
                    <a class="item"><i class="instagram icon purple"></i> Instagram</a>
                    <a class="item"><i class="facebook icon blue"></i> Facebook</a>
                    <a class="item"><i class="mail icon grey"></i> E-mail</a>
                </div>
      </div>
            <div class="artistSpec">
                <h1>{this.props.obj.username}</h1>
                <br/>
                <img  class="profile-specs" alt= "artist's featured piece" src={this.props.obj.profilePic}/>
                <h3>Location: {this.props.obj.location}</h3>
                <h4>{this.props.obj.bio}</h4>
                <h3>Style: {this.props.obj.category}</h3>
                <h3>Rate: ${this.props.obj.rate}</h3>
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
