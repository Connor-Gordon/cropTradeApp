import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignUsername } from '../actions/userActions'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { withAuth } from '../lib/auth'

class SignIn extends Component {
    state = {
        username: "",
        password: ""
    }
    
    handleSubmit = e => {
        e.preventDefault()
        assignUsername(this.state.username).then(() => {
            this.props.history.push('/')
        })
    }

    handleSubmitWoUser = e => {
        e.preventDefault()
        assignUsername("").then(() => {
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
                    <h2>Enter Username and password</h2>
                    <form onSubmit={this.handleSubmit} id="loginForm">
                        <input name='username' className="loginStuff" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/>
                        <input name='password' className="loginStuff" type="text" value={this.state.password} onChange={this.handleChange} placeholder="Enter a Password"/>

                        <button className="loginStuff" type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <Link to={"/Register"} >Click here to register</Link>
                </div>
                <Footer />
                </div>
            )

    }
}

function mapStateToProps(appState, ownProps) {
    return {
        username: appState.usersReducer.username,
        password: appState.usersReducer.password,
        history: ownProps.history
    } 
  }
  
  export default  withAuth(connect(mapStateToProps)(SignIn))