import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/listActions';
import { withAuth, api} from '../lib/auth'
import { getProfile } from '../actions/chatActions'
import SimpleMap from './Googlemaps'
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

  let email = this.props.profile.email
  let subject = this.props.post.title
  let mailto = "mailto:" + email + "?subject=" + subject

    return (
      <div>
        <div className="listCon"> 
          <div className="postCon">
            <div><h2>{this.props.post.title}</h2></div>
            <div ><a className="replybutton" href={mailto}>Click Here to Message Farmer about this post</a></div>
            <div className="descriptionCon">{this.props.post.description}</div>
            <div className="freshBy">FRESH BY: {this.props.post.fresh_by}</div>
            <div>${this.props.post.price}</div>
            <div>{this.props.post.zipcode}</div>
            <div><img alt="noPic" className="photo" src={this.props.post.photo}/></div>
            <SimpleMap/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
   post: appState.listingsReducer.post,
   profile: appState.chatReducer.profile
}
}
export default withAuth(connect(mapStateToProps)(Post))