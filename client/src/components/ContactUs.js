import React, { Component } from 'react'
import { connect } from 'react-redux'



import '../styles/aboutStyles.css'
import Footer from './Footer'

import '../styles/footerStyles.css'





class ContactUs extends Component {
  
  render() {
    return (
      <div className='aboutUs'>
        <div className="aboutCon">
            <h2>Contact Us</h2>
            <div>
                <p>702-555-5555</p>
                <p>contact@croptradeapp.gmail.com</p>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(ContactUs)
