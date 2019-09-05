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
            </div>
        )
    }

}

export default ArtistView;