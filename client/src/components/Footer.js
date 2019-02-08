import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ScrollUpButton from "react-scroll-up-button"

import '../styles/footerStyles.css'



class Footer extends Component {
  
  render() {
    return (
      <div className='footer'>
        <div id="navLinks">
            <ul>
                <li><Link className="navName" to={'/'}>Home</Link></li>
                <li><Link className="navName" to={"/About"}>About</Link></li>
                <li><Link className="navName" to={'/Profile'}>Profile</Link></li>
                <li><Link className="navName" to={'/Settings'}>Settings</Link></li>
            </ul>
        </div>
        <div>
            <h3 id="contactTitle">Contact Us</h3>
            <div id="contactUs">
                <ul>
                    <li className="contactName">Connor Gordon</li>
                    <li className="contactNum">702-279-8978</li>
                    <li className="contactNum">con.gordon@gmail.com</li>
                </ul>
                <ul>
                    <li className="contactName">Sucely Chavarria</li>
                    <li className="contactNum">818-720-4538</li>
                    <li className="contactNum">sucely.c07@gmail.com</li>
                </ul>
            </div>
        </div>
        <div id="backToTop">
            <ScrollUpButton />
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(Footer)
