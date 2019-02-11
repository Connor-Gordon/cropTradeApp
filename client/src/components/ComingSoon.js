import React, { Component } from 'react'
import { connect } from 'react-redux'



import '../styles/aboutStyles.css'
import Footer from './Footer'

import '../styles/footerStyles.css'





class ComingSoon extends Component {
  
  render() {
    return (
      <div className=''>
        <div className="">
            <p>We're sorry.</p>
            <p>This page is still under construction.</p>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(ComingSoon)
