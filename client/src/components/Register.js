import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignUsername } from '../actions/chatActions'
import Footer from './Footer'
import { withAuth } from '../lib/auth'

import '../styles/loginStyles.css'

class Register extends Component {
    state = {
       
        username: '',
        password: '',
        email: '',
        phone: '',
        picture:'',
        location:'',
        bio:''
      
    }
    
    handleSubmit= (e) => {
        e.preventDefault()
        assignUsername({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            picture:this.state.picture,
            location:this.state.location,
            bio:this.state.bio
        })
        this.setState({
           
                username: '',
                password: '',
                email: '',
                phone: '',
                picture:'',
                location:'',
                bio:''
            
        })
    }

    handleChange = e => {
        this.setState({
         
            [e.target.name]: e.target.value
           
            })
            
          } 

    render (){
            return(
                <div>
                <div id="login">
                    <h2>Choose a username to be recognized!</h2>
                    <form onSubmit={this.handleSubmit} id="loginForm">
                        <input name='username' className="loginStuff" autoComplete='off' type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/>
                        <input name='password' className="loginStuff" autoComplete='off' type="text" value={this.state.password} onChange={this.handleChange} placeholder="Enter a Password"/><br/>
                        <input name='email' className="loginStuff" autoComplete='off' type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter a Valid Email"/>
                        <input name='phone' className="loginStuff" autoComplete='off' type="tel" value={this.state.phone} onChange={this.handleChange} placeholder="Phone-number"/><br/>
                        <input name='location' className="loginStuff" autoComplete='off' type="text" value={this.state.location} onChange={this.handleChange} placeholder="Enter a Zipcode"/>
                        <input className="loginStuff" autoComplete='off' type="url" name="picture" onChange={this.handleChange} placeholder="Photo URL" value={this.state.picture}/><br/>
                        <textarea className="loginStuff" autoComplete='off' name="bio" onChange={this.handleChange} placeholder="Bio" value={this.state.bio}></textarea><br/>
                        <button className="loginStuff" type="submit">Submit</button>
                    </form>
                </div>
                <div>
                </div>
                <Footer />
                </div>
            )

    }
}

function mapStateToProps(appState, ownProps) {
    return {
        username: appState.chatReducer.username,
        password: appState.chatReducer.password,
        history: ownProps.history
    } 
  }
  
  export default  withAuth(connect(mapStateToProps)(Register))