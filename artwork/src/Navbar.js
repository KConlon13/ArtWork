import React from 'react'
import Login from "./Login"
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render(){

        return(
            <div>
            <div class="ui menu">
            <div className="item">
            <h1 className="welcome"> <Link to="/">ArtWork</Link></h1>
            </div>
            <div class="item">
            <Link to="/signup">Signup</Link>
          </div>
            <div class="item">
               <Link to="/login">Login</Link>
               </div>

          </div>
          </div>
        
        )
    }
}

export default Navbar 