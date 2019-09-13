import React from "react"
import { withRouter } from 'react-router'
class Login extends React.Component {
    state={
        username: "",
        password: ""
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        console.log("clicked submit", this.state)
      e.preventDefault()
      fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
            console.log(data.user)
          localStorage.setItem('token', data.token)
  
          this.props.loginHandler(data.user.id)
          this.props.history.push(`/artists/${data.user.id}`)
        })
    }
    render(){
        return (
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                <h3 class="signin header">
                    <div class="content">
                        Log-in to your account
                    </div>
                </h3>
                    <form class="ui large form" onSubmit={this.handleSubmit}>
                        <div class="ui stacked segment">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="text" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
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
            </div>
        )
    }
}
export default withRouter(Login);
// export default Login;