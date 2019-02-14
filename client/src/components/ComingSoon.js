import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/aboutStyles.css'


class ComingSoon extends Component {
  
  render() {
    return (
      <div className=''>
        <div className="comingSoon">
            <p>We're sorry.</p>
            <p>This page is still under construction.</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(ComingSoon)
