import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../actions/otherActions';
import '../styles/aboutStyles.css'


class ComingSoon extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = e => {
    console.log(e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  fileUploadHandler = () => {

  }

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
