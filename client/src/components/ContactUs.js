import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/aboutStyles.css'


class ContactUs extends Component {
  
  render() {
    return (
      <div className='contactUs'>
        <div >
            <h2>Contact Us @</h2>
            <div className="contactInfo">
                <p>702-555-5555</p>
                <p>contact@croptradeapp.gmail.com</p>
                <p>
                  <a target="blank" href="https://www.google.com/maps/place/1112+S+Casino+Center+Blvd,+Las+Vegas,+NV+89104/@36.1583671,-115.1547439,17z/data=!3m1!4b1!4m5!3m4!1s0x80c8c39ab25d5fd5:0x8a76a578cf778310!8m2!3d36.1583864!4d-115.1525015" >1112 S Casino Center Blvd</a>
                </p>
                <p>Las Vegas, NV, 89104</p>
            </div>
        </div>
        <div>
          <h4>Send us a message!</h4>
          <form id="contactForm">
            <ul id="contactUl">
              <li><input className="contactInput" type="text" placeholder="Name"></input></li>
              <li><input className="contactInput" type="text" placeholder="Email"></input></li>
              <li><input className="contactInput" type="text" placeholder="Subject"></input></li>
            </ul>
            
            <input id="message" className="contactInput" type="textarea" placeholder="Message"></input>
          </form>
          {/* make and setup onSubmit so that it changes this containing div to a "got your message" box */}
          <button id="contactButton" className="contactInput" type="submit">Submit</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(ContactUs)
