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
            <img alt="noPic" id="profileImg" src={this.props.profile.profile_pic} onError={(e)=>{e.target.onerror = null; e.target.src="http://fertilitynetworkuk.org/wp-content/uploads/2017/01/Facebook-no-profile-picture-icon-620x389.jpg"}}/>
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
            <div className="profilegrid">
              {this.props.posts.map(item => (
                <div key={item.id + "posts"} className="grid">
                    <Link  to={`/post/${item.id}`}> <img alt="noPic" className="gridImage" src={item.photo} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn2.iconfinder.com/data/icons/orange-emoticon/512/Orange_Emoticon-03-512.png"}}/><p className="ptitlePro">{item.title} (Las Vegas)</p> </Link> 
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
