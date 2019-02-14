import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignUsername } from '../actions/chatActions'
import { withAuth } from '../lib/auth'

import '../styles/loginStyles.css'

class Register extends Component {
    state = {
        username: "",
        password: ""
    }
    

    // make this push to either profile or successfully registered page
    handleSubmit= (e) => {
        e.preventDefault()
        assignUsername(this.state.username, this.state.password).then(() => {
            this.props.history.push('/')
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
                    <h2>Choose a Username and Password</h2>
                    <form onSubmit={this.handleSubmit} id="loginForm">
                        <input name='username' className="loginStuff" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/>
                        <input name='password' className="loginStuff" type="text" value={this.state.password} onChange={this.handleChange} placeholder="Enter a Password"/>

                        <button className="loginStuff" type="submit">Submit</button>
                    </form>
                </div>
                <div>
                </div>
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