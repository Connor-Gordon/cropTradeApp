import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addMessage, getMessages} from '../actions/chatActions'
import { withAuth } from '../lib/auth'
import '../styles/chatStyles.css'
import { api } from '../lib/auth';

class Chat extends Component {
    state = {
        message:''
    }

componentDidMount() {
  getMessages(this.props.match.params.receiver_id, this.props.match.params.user_id)
}

componentWillUpdate() {
  //checks to see if the ref at messages has been scrolled all the way to the bottom
  var node = this.refs.messages
  this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
}
componentDidUpdate() {
  //if we're already at the bottom, scroll to the bottom, otherwise, don't
  //preserves where the user is currently scrolled to
  if (this.shouldScrollBottom) {
    var node = this.refs.messages
    node.scrollTop = node.scrollHeight
  }
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  if(this.state.message !== "" && this.state.message !== " ") {
    addMessage(
        {message: this.state.message},
        this.props.match.params.receiver_id,
        this.props.match.params.user_id
      )
  } else {
    addMessage({
      message: ''
    })
  }
  this.setState({
    message: ''
  })
}
  
  render() {
    return (
      <div>
        <h3 name="user_id">{this.props.post.user_id}</h3>
        <div className="mainchatCon">
            <div>
              <div id='roomWrap'>
                <div className="chatCon" ref='messages'>
                  {this.props.messages.map((message, i) => (
                        <p key={message + '-message-' + i}>
                          <span className="roomUsername">{api.getProfile().username}</span>: {message.message}
                        </p>
                      ))}
                </div>
              </div>
              <div className="sendMessageCon">
                <form className="chatsendbar" autoComplete="off" onSubmit={this.handleSubmit}>
                  <input className="messagechatBar" type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                  <button className="sendchatbutton" type="submit">Send</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState, ownProps) { 
  return {
    messages: appState.chatReducer.messages,
    history: ownProps.history,
    token: appState.chatReducer.token,
    post: appState.listingsReducer.post,
    profile: appState.chatReducer.profile
  }
}

export default withAuth(connect(mapStateToProps)(Chat))