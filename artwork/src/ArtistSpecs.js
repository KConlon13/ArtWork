import React from 'react'
class ArtistSpecs extends React.Component {
    render(){
        return(
            <div>
            <div class="overlay fixed" style={{position: "sticky", top: "20px", right: "auto", zIndex: "20", float:"right"}}>
                <div class="ui labeled icon vertical menu">
                    <a class="item" href={this.props.obj.instagram} target="_blank"><i class="instagram icon purple"></i> Instagram</a>
                    <a href={this.props.obj.facebook} target="_blank" class="item"><i class="facebook icon blue"></i> Facebook</a>
                    <a href={"mailto:" + this.props.obj.emailLink} target="_blank" class="item"><i class="mail icon grey"></i> E-mail</a>
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
                <h5>{this.props.obj.phone}</h5> 
                <h5><a href={this.props.obj.website} target="_blank">{this.props.obj.website}</a></h5> 
                <h5><a href={"mailto:" + this.props.obj.emailLink} target="_blank">{this.props.obj.emailLink}</a></h5> 
                {/* <button className="backButton" onClick={()=>this.props.clickHandler(this.props.obj)}>Back to All Artists</button> */}
            </div>
            </div>
        )
    
    }
}
export default ArtistSpecs;