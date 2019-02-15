import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile, getMyPosts } from '../actions/chatActions';
import { Link } from 'react-router-dom'


import '../styles/aboutStyles.css'
import '../styles/profileStyles.css'
import '../styles/footerStyles.css'





class Profile extends Component {
  
componentDidMount(){
  getProfile(this.props.match.params.username)
  getMyPosts(this.props.match.params.username)
}


  render() {
    return (
      <div id="profile">
        <div id="center">
            <h3 className="profileLi">{this.props.profile.username}</h3>
          <div className="profileDiv">
            <img id="profileImg" alt="NoPic" src={this.props.profile.profile_pic}></img>
          </div>
          <ul className="profileUl">
            <li ></li>
            <li className="profileLi">Bio: {this.props.profile.bio}</li>
            <li className="profileLi">Zip Code: {this.props.profile.user_location}</li>
            <li className="profileLi">Profile Created: {this.props.profile.profile_created}</li>
          </ul>
          <div>
            <h3>Posts by this user:</h3>
            {/* use user_id to display all posts by this user, code below stolen from list.js as syntax example */}
            <div>
              {this.props.posts.map(item => (
                <div key={item.id + "posts"} className="grid">
                    <Link  className="postLi" to={`/post/${item.id}`}> <img alt="noPic" className="gridimage" src={item.photo}/><p>{item.title} (Las Vegas)</p> </Link> 
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
    profile: appState.chatReducer.profile,
    posts: appState.chatReducer.myPosts
  }
}
export default connect(mapStateToProps)(Profile)
