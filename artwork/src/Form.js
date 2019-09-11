// import React from "react"
// // import { withRouter } from 'react-router'

// class Form extends React.Component {
// state={
//     username: "",
//     location: "",
//     category: "",
//     bio: "",
//     rate: "",
//     phone: "",
//     email: "",
//     website: "",
//     profilePic: "",
//     feature: "",
//     password: "",
//     instagram: "",
//     facebook: ""
// }

// changeHandler=(event)=>{
//     let {name, value} = event.target
//     this.setState({
//         [name]: value
//     })
// }

// handleSubmit = e => {
//     e.preventDefault()
//     fetch('http://localhost:3001/artists', {
//       method: 'POST',
//       body: JSON.stringify(this.state),
//       headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         localStorage.setItem('userId', data.id)
//         console.log(data)
//         this.props.setUser(data)
//         this.props.history.push('/artists')
//       })

//     this.setState({
//         username: "",
//         location: "",
//         category: "",
//         bio: "",
//         rate: "",
//         phone: "",
//         emailLink: "",
//         website: "",
//         profilePic: "",
//         feature: "",
//         password: "",
//         instagram: "",
//         facebook: ""
//     })
//   }

// render(){
//     return(
//     <div id="signup-form">
//         <form className="ui form" onSubmit={((event) => this.props.submitHandler(event, this.state))} >
//             <h3 class="ui dividing header">Become an ArtWork Artist</h3>
//             <br/>

//             <div class="two fields">

//             <div class="field" >
//             <div class="ui left icon input">
//             <i class="user icon"></i>
//                     <input 
//                         type="text" 
//                         name="username" 
//                         value={this.state.username} 
//                         onChange={this.changeHandler}
//                         placeholder="Create Username"
//                         />
//                 </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="lock icon"></i>
//             <input 
//                         type="password" 
//                         name="password" 
//                         value={this.state.password} 
//                         onChange={this.changeHandler}
//                         placeholder="Create Password"
//                         />
//             </div>
//             </div>
//             </div>

//             <div class="two fields">

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="globe icon"></i>
//                     <input 
//                         type="text" 
//                         name="location" 
//                         value={this.state.location} 
//                         onChange={this.changeHandler}
//                         placeholder="Location"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="paint brush icon"></i>
//                     <input 
//                         type="text" 
//                         name="category" 
//                         value={this.state.category} 
//                         onChange={this.changeHandler}
//                         placeholder="Art Style"
//                         />
//             </div>
//             </div>
//             </div>

//             <div class="field">
//                     <textarea 
//                         name="bio" 
//                         value={this.state.bio} 
//                         onChange={this.changeHandler}
//                         placeholder="Short Bio About Yourself  (approx 150-500 characters)"
//                         />
//             </div>


//             <div class="three fields">

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="dollar icon"></i>
//                     <input 
//                         type="text" 
//                         name="rate" 
//                         value={this.state.rate} 
//                         onChange={this.changeHandler}
//                         placeholder="Hourly Rate"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="id badge icon"></i>
//                     <input 
//                         type="text" 
//                         name="profilePic" 
//                         value={this.state.profilePic} 
//                         onChange={this.changeHandler}
//                         placeholder="Profile Picture Image URL"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="image icon"></i>
//                     <input 
//                         type="text" 
//                         name="feature" 
//                         value={this.state.feature} 
//                         onChange={this.changeHandler}
//                         placeholder="Featured Art Piece Image URL"
//                         />
//             </div>
//             </div>
//             </div>

//             <h5 class="ui dividing header">Contact Info:</h5>
//             <div class="three fields">

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="phone icon"></i>
//                     <input 
//                         type="text" 
//                         name="phone" 
//                         value={this.state.phone} 
//                         onChange={this.changeHandler}
//                         placeholder="Phone Number"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="mail icon"></i>
//                     <input 
//                         type="text" 
//                         name="email" 
//                         value={this.state.email} 
//                         onChange={this.changeHandler}
//                         placeholder="Email Address"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="desktop icon"></i>
//                     <input 
//                         type="text" 
//                         name="website" 
//                         value={this.state.website}
//                         onChange={this.changeHandler}
//                         placeholder="Website URL"
//                         />
//             </div>
//             </div> 
//             </div>

//             <h5 class="ui dividing header">Socials:</h5>
//             <div class="two fields">

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="phone icon"></i>
//                     <input 
//                         type="text" 
//                         name="instagram" 
//                         value={this.state.instagram} 
//                         onChange={this.changeHandler}
//                         placeholder="Instagram URL"
//                         />
//             </div>
//             </div>

//             <div class="field">
//             <div class="ui left icon input">
//             <i class="phone icon"></i>
//                     <input 
//                         type="text" 
//                         name="facebook" 
//                         value={this.state.facebook} 
//                         onChange={this.changeHandler}
//                         placeholder="Facebook URL"
//                         />
//             </div>
//             </div>

//             </div>

//             <button class="ui teal button" type="submit">Sign Up</button>
//             </form>
//         </div>
//     )}
// }

// // export default withRouter(Form);
// export default Form;