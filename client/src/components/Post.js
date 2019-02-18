import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/listActions';
import { Link } from 'react-router-dom'
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
    return (
      <div>
        <div className="listCon"> 
          <div className="postCon">
            <div><h2>{this.props.post.title}</h2></div>
            <Link to={`/chatroom/${this.props.post.user_id}/${this.props.profile.user_id}`}>
               <div className="replybutton">Click Here to Message Farmer about this post</div>
            </Link>
            <div className="descriptionCon">{this.props.post.description}</div>
            <div className="freshBy">FRESH BY: {this.props.post.fresh_by}</div>
            <div><img alt="noPic" className="photo" src={this.props.post.photo}/></div>
            <SimpleMap/>
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