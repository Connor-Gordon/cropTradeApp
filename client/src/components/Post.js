import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/listActions';

import '../styles/postStyles.css'
import Footer from './Footer'



class Post extends Component {
  componentDidMount() {
    getPost(this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <div className="postmainCon"> 
          <div className="postCon">
            <div><h2>{this.props.post.title}</h2></div>
            <button className="replybutton">reply</button>
            <div>{this.props.post.description}</div>
            <div className="freshBy">FRESH BY: {this.props.post.fresh_by}</div>
            <div><img alt="imagenotfound" className="photo" src={this.props.post.photo}/></div>
          </div>
        </div>
        <Footer /> 
      </div>
    )
  }
}

function mapStateToProps(appState) {
  
  return {
   post: appState.listingsReducer.post
  }
}

export default connect(mapStateToProps)(Post)