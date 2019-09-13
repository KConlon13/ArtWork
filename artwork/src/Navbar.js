import React from 'react'
import Login from "./Login"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  clearSession=()=>{
    localStorage.removeItem('token')
    this.props.loginHandler(null);
    this.props.history.push("/login")
  }

    render(){

        return(
            <div>
            <div class="ui menu">
            <div className="item">
            <h1 className="welcome"> <Link to="/">ArtWork</Link></h1>
            </div>
            <div class="item">
        {localStorage.length > 0 ? <div onClick={this.clearSession}>Log Out</div>  : <Link to="/signup">Signup</Link> }
          </div>
            <div class="item">
               {localStorage.length > 0 ? <Link to={`/artists/${this.props.user_id}`}>Profile</Link> : <Link to="/login">Login</Link>}
               
               </div>

          </div>
          </div>
        
        )
    }
}

export default withRouter(Navbar) 