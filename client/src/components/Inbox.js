import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withAuth } from '../lib/auth'
import { api } from '../lib/auth';


import '../styles/aboutStyles.css'

import '../styles/footerStyles.css'


class Inbox extends Component {
  
state = {

}

  render() {
    return (
      <div className=''>
        <h3>Your new messages will be here:</h3>
        <div className="newMessages">
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    messages: appState.chatReducer.messages,
    post: appState.listingsReducer.post,
    profile: appState.chatReducer.profile
  }
}
export default withAuth(connect(mapStateToProps)(Inbox))