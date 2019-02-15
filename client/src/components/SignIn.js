import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withAuth } from '../lib/auth'

import '../styles/loginStyles.css'

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    }
    
    handleSubmit= (e) => {
        e.preventDefault()
        this.props.signin(this.state.username, this.state.password).then(()=> {
            this.props.history.push('/')
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            })
          } 

    render (){
            return(
                <div>
                    <div id="login">
                        <h2>Enter Username and Password to Log In</h2>
                        <form onSubmit={this.handleSubmit} id="loginForm">
                            <input name='username' className="loginStuff" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/>
                            <input name='password' className="loginStuff" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter a Password"/>

                            <button className="loginStuff" type="submit">Submit</button>
                        </form>
                        <div id="registerLink">
                        <p>Not signed up yet?</p>
                        <Link to={"/Register"} >Click here to register</Link>
                        </div>
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
  
  export default  withAuth(connect(mapStateToProps)(SignIn))

