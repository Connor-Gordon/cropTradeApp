import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/listActions';
import { Link } from 'react-router-dom'

import '../styles/listStyles.css'

import Footer from './Footer'

class List extends Component {
  componentDidMount() {
    getPosts(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div className="listCon">
        <div >
          <h1>Crop Trade App</h1>
          <h1 className="catname">{this.props.match.params.slug}</h1> 
          <div className="bodyCon">
              <input className="listsearchbar" type="text" name="searchbar" placeholder="search" />
              
                  <div className="addpostButton"> 
                      <Link className="addpostButton" to={`/form/${this.props.match.params.slug}/${this.props.match.params.id}`}>Add Post</Link>
                  </div>
          </div>
          <div>
              <ul>
                  {this.props.posts.map(item => (
                      <li key={item.id}> <Link className="postLi" to={`/post/${item.id}`}>{item.title} (Las Vegas) </Link> </li>
                  ))}
              </ul>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
   posts: appState.listingsReducer.posts
  }
}

export default connect(mapStateToProps)(List)


