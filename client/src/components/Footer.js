import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/footerStyles.css'



class Footer extends Component {
  
  render() {
    return (
      <div >
        <div className='footer'>
            <ul id='footerUl'>
                <li><Link className="navName" to={'/'}>Home</Link></li>
                <li><Link className="navName" to={"/About"}>About Us</Link></li>
                <li><Link className="navName" to={'/ComingSoon'}>Profile</Link></li>
                <li><Link className="navName" to={'/ComingSoon'}>Settings</Link></li>
                <li><Link className="navName" to={'/ContactUs'}>Contact Us</Link></li>
                <li><a className="navName" href="#searchForm">Top of Page</a></li>
            </ul>
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
