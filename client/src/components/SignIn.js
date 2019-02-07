import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignUsername } from '../actions/userActions'
import Footer from './Footer'

class SignIn extends Component {
    state = {
        username: ""
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
            [e.target.name]: e.target.value
            })
          } 

    render (){
            return(
                <div>
                <div id="login">
                    <h2>Choose a username to be recognized!</h2>
                    <form onSubmit={this.handleSubmit} id="loginForm">
                        <input name='username' className="loginStuff" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Username"/>
                        <button className="loginStuff" type="submit">Submit</button>
                    </form>
                </div>
                <Footer />
                </div>
            )

    }
}

function mapStateToProps(appState, ownProps) {
    return {
        username: appState.usersReducer.username,
        history: ownProps.history
    }
  }
  
  export default connect(mapStateToProps)(SignIn)