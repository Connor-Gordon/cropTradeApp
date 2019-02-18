import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import '../styles/welcomeStyles.css'


class Welcome extends Component {
  
  render() {
    return (
      <div className=''>
        <div id="welcomePage">
            <h2 id="h2">Welcome to CropTrade!</h2>
        </div>
        <div id="section1">
            <div className="welcomeP">We made this app to help people buy, sell, trade, and barter local produce in their area.</div>
            <div className="welcomeP">After you create a profile, you can post your excess fruits and veggies for sale or trade.</div>
            <div className="welcomeP">You can search through available produce, either by category or keyword, and email other users to facilitate your produce trade.</div>
        </div>
        <div id="getStarted">
            <Link id="homeLink" to={`/home`}>Click here to get started!</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(Welcome)
