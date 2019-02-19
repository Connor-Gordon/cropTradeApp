import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/listActions';
import { Link } from 'react-router-dom'
import { withAuth, api} from '../lib/auth'
import { getProfile } from '../actions/chatActions'

import '../styles/postStyles.css'

class Post extends Component {
  componentDidMount() {
    getPost(this.props.match.params.id)
    getProfile(api.getProfile().username)
  }

  
  render() {

  // delete post
  //   let deletePost= ""

  // if(this.props.profile.user_id = this.props.post.user_id){
  //   deletePost = <div >
  //     <button id="deleteButton">Remove this Posting</button>
  //   </div>
  // } else {
  //   deletePost = <div>Login to remove this post</div>
  // }

    return (
      <div>
        <div className="postmainCon"> 
          <div className="postCon">
            <div><h2>{this.props.post.title}</h2></div>
            <Link to={`/chatroom/${this.props.match.params.id}/${this.props.profile.user_id}`}>
               <div className="replybutton">Message Farmer about this post</div>
            </Link>
            <div><img alt="noPic" className="photo" src={this.props.post.photo}/></div>
            <div>${this.props.post.price}</div>
            <div>{this.props.post.zipcode}</div>
            <div className="freshBy">FRESH BY: {this.props.post.fresh_by}</div>
            <div>{this.props.post.description}</div>
          </div>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   post: appState.listingsReducer.post,
   profile: appState.chatReducer.profile
}
}
export default withAuth(connect(mapStateToProps)(Post))