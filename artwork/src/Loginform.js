import React from "react"
import { withRouter } from 'react-router'
import Profile from "./Profile"

class Loginform extends React.Component {


    render(){
        return (
            <div> 
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                <h3 class="signin header">
                    <div class="content">
                        Log-in to your account
                    </div>
                </h3>
                    <form class="ui large form" onSubmit={(event) => this.props.handleSubmit(event, this.props)}>
                        <div class="ui stacked segment">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="username" placeholder="Enter Username" value={this.props.username} onChange={this.props.handleChange}/>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="text" name="password" placeholder="Enter Password" value={this.props.password} onChange={this.props.handleChange}/>
                                </div>
                            </div>
                            <button class="ui fluid large teal submit button" type="submit">
                                Login
                            </button>
                            <div class="ui error message"></div>
                            <div class="ui message">
                                New to us?
                                <a href="#">  Sign Up</a>
                            </div>
                        </div>
                    </form>
                </div>
        </div> }
            </div> 
        )
    }
}
// export default withRouter(Login);
export default Loginform;