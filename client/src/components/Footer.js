import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/footerStyles.css'



class Footer extends Component {
  

  
  render() {
    return (
      <div className='footer'>
            <ul id='footerUl'>
                <li><Link className="navName" to={'/home'}>Home</Link></li>
                <li><Link className="navName" to={"/about"}>About Us</Link></li>
                <li><Link className="navName" to={'/contactus'}>Contact Us</Link></li>
                <li><a className="navName" href="#searchForm">Top of Page</a></li>
            </ul>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(Footer)
