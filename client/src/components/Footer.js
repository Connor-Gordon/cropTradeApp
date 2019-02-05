import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import '../styles/footerStyles.css'



class Footer extends Component {
  
  render() {
    return (
      <div className='footer'>
        <div id="navLinks">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={'/Profile'}>Profile</Link></li>
                <li><Link to={'/Settings'}>Settings</Link></li>
            </ul>
        </div>
        <div>
            <h3 id="contactTitle">Contact Us</h3>
            <div id="contactUs">
                <ul>
                    <li>Connor Gordon</li>
                    <li>702-279-8978</li>
                    <li>con.gordon@gmail.com</li>
                </ul>
                <ul>
                    <li>Sucely Chavarria</li>
                    <li>702-555-5555</li>
                    <li>placeholderemail@gmail.com</li>
                </ul>
            </div>
        </div>
        <div id="backToTop">
            <button>Back To Top</button>
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
